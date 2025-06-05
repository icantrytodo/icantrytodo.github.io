(function() {
    'use strict';
    
    Lampa.Lang.add({
        ratimg_omdb_avg: {
            ru: 'ИТОГ',
            en: 'TOTAL',
            uk: 'ПІДСУМОК',
            be: 'ВЫНІК',
            pt: 'TOTAL',
            zh: '总评',
            he: 'סה"כ',
            cs: 'VÝSLEDEK',
            bg: 'РЕЗУЛТАТ'
        },
        loading_dots: {
            ru: 'Загрузка рейтингов',
            en: 'Loading ratings',
            uk: 'Завантаження рейтингів',
            be: 'Загрузка рэйтынгаў',
            pt: 'Carregando classificações',
            zh: '加载评分',
            he: 'טוען דירוגים',
            cs: 'Načítání hodnocení',
            bg: 'Зареждане на рейтинги'
        },
        maxsm_omdb_oscars: { 
            ru: 'Оскары',
            en: 'Oscars',
            uk: 'Оскари',
            be: 'Оскары',
            pt: 'Oscars',
            zh: '奥斯卡奖',
            he: 'אוסקר',
            cs: 'Oscary',
            bg: 'Оскари'
        }
    });

    // Стили
    var style = "<style id=\"maxsm_omdb_rating\">" +
        ".full-start-new__rate-line {" +
        "visibility: hidden;" +
        "flex-wrap: wrap;" +
        " gap: 0.4em 0;" +
        "}" +
        ".full-start-new__rate-line > * {" +
        "    margin-left: 0 !important;" +
        "    margin-right: 0.6em !important;" +
        "}" +
        ".rate--avg.rating--green  { color: #4caf50; }" +
        ".rate--avg.rating--lime   { color: #cddc39; }" +
        ".rate--avg.rating--orange { color: #ff9800; }" +
        ".rate--avg.rating--red    { color: #f44336; }" +
        ".rate--oscars             { color: gold;    }" +
        "</style>";
    
    Lampa.Template.add('card_css', style);
    $('body').append(Lampa.Template.get('card_css', {}, true));
    
    // Обновленные стили с гарантированной видимостью
    var loadingStyles = "<style id=\"maxsm_loading_animation\">" +
        ".loading-dots-container {" +
        "    position: absolute;" +
        "    top: 50%;" +
        "    left: 0;" +
        "    right: 0;" +
        "    text-align: left;" +
        "    transform: translateY(-50%);" +
        "    z-index: 10;" +
        "}" +
        ".full-start-new__rate-line {" +
        "    position: relative;" +
        "}" +
        ".loading-dots {" +
        "    display: inline-flex;" +
        "    align-items: center;" +
        "    gap: 0.4em;" +
        "    color: #ffffff;" +
        "    font-size: 1em;" +
        "    background: rgba(0, 0, 0, 0.3);" +
        "    padding: 0.6em 1em;" +
        "    border-radius: 0.5em;" +
        "}" +
        ".loading-dots__text {" +
        "    margin-right: 1em;" +
        "}" +
        ".loading-dots__dot {" +
        "    width: 0.5em;" +
        "    height: 0.5em;" +
        "    border-radius: 50%;" +
        "    background-color: currentColor;" +
        "    animation: loading-dots-bounce 1.4s infinite ease-in-out both;" +
        "}" +
        ".loading-dots__dot:nth-child(1) {" +
        "    animation-delay: -0.32s;" +
        "}" +
        ".loading-dots__dot:nth-child(2) {" +
        "    animation-delay: -0.16s;" +
        "}" +
        "@keyframes loading-dots-bounce {" +
        "    0%, 80%, 100% { transform: translateY(0); opacity: 0.6; }" +
        "    40% { transform: translateY(-0.5em); opacity: 1; }" +
        "}" +
        "</style>";

    Lampa.Template.add('loading_animation_css', loadingStyles);
    $('body').append(Lampa.Template.get('loading_animation_css', {}, true));
    
    // Конфигурация
    var CACHE_TIME = 3 * 24 * 60 * 60 * 1000; // 3 дня
    var OMDB_CACHE = 'maxsm_rating_omdb';
    var KP_CACHE = 'maxsm_rating_kp';
    var ID_MAPPING_CACHE = 'maxsm_rating_id_mapping';
    var OMDB_API_KEY = window.RATINGS_PLUGIN_TOKENS?.OMDB_API_KEY || '';
    var KP_API_KEY = window.RATINGS_PLUGIN_TOKENS?.KP_API_KEY || '';
    
    // Словарь возрастных рейтингов
    var AGE_RATINGS = {
        'G': '3+',
        'PG': '6+',
        'PG-13': '13+',
        'R': '17+',
        'NC-17': '18+',
        'TV-Y': '0+',
        'TV-Y7': '7+',
        'TV-G': '3+',
        'TV-PG': '6+',
        'TV-14': '14+',
        'TV-MA': '17+'
    };
    
    // Весовые коэффициенты
    var WEIGHTS = {
        imdb: 0.35,
        tmdb: 0.15,
        kp: 0.20,
        mc: 0.15,
        rt: 0.15
    };
    
    // Получаем количсевто Оскаров
    function parseOscars(awardsText) {
        if (typeof awardsText !== 'string') return null;
    
        var match = awardsText.match(/Won (\d+) Oscars?/i);
        if (match && match[1]) {
            return parseInt(match[1], 10);
        }
    
        return null;
    }

    // Модифицируем функцию getKinopoiskRatingByNormalizedCard для использования колбэков
    function getKinopoiskRatingByNormalizedCard(normalizedCard, apiKey, callback) {
        // var queryTitle = normalizedCard.original_title || normalizedCard.title;
        var queryTitle = (normalizedCard.original_title || normalizedCard.title || '').replace(/[:\-–—]/g, ' ').trim();
        var year = '';
        if (normalizedCard.release_date && typeof normalizedCard.release_date === 'string') {
            year = normalizedCard.release_date.split('-')[0];
        }
        
        if (!year) {
            callback(null);
            return;
        }
        
        var encodedTitle = encodeURIComponent(queryTitle);
        var searchUrl = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=' + encodedTitle;
        
        fetch(searchUrl, {
            method: 'GET',
            headers: {
                'X-API-KEY': apiKey,
                'Content-Type': 'application/json'
            }
        })
        .then(function(response) {
            if (!response.ok) throw new Error('HTTP error: ' + response.status);
            return response.json();
        })
        .then(function(data) {
            if (!data.films || !data.films.length) {
                callback(null);
                return;
            }
            
            // Ищем лучший матч по году
            var bestMatch = null;
            for (var i = 0; i < data.films.length; i++) {
                var film = data.films[i];
                // if (film.year && String(film.year) === String(year)) {
                if (film.year && String(film.year).startsWith(String(year))) {
                    bestMatch = film;
                    break;
                }
            }
            
            // if (!bestMatch) bestMatch = data.films[0];
            if (!bestMatch || !bestMatch.filmId) {
                callback(null);
                return;
            }
            
            // Второй запрос по filmId
            var detailUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/' + bestMatch.filmId;
            
            fetch(detailUrl, {
                method: 'GET',
                headers: {
                    'X-API-KEY': apiKey,
                    'Content-Type': 'application/json'
                }
            })
            .then(function(response) {
                if (!response.ok) throw new Error('HTTP error: ' + response.status);
                return response.json();
            })
            /*.then(function(filmDetails) {
                callback(filmDetails.ratingKinopoisk || null);
            })*/
            .then(function(filmDetails) {
                callback({
                    kinopoisk: filmDetails.ratingKinopoisk || null,
                    imdb: filmDetails.ratingImdb || null
                });
            })
            .catch(function() {
                callback(null);
            });
        })
        .catch(function() {
            callback(null);
        });
    }

    function addLoadingAnimation() {
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;

        var rateLine = $('.full-start-new__rate-line', render);
        if (!rateLine.length || $('.loading-dots-container', rateLine).length) return;

        rateLine.append(
            '<div class="loading-dots-container">' +
                '<div class="loading-dots">' +
                    '<span class="loading-dots__text">' + Lampa.Lang.translate("loading_dots") + '</span>' +
                    '<span class="loading-dots__dot"></span>' +
                    '<span class="loading-dots__dot"></span>' +
                    '<span class="loading-dots__dot"></span>' +
                '</div>' +
            '</div>'
        );

        $('.loading-dots-container', rateLine).css({
            'opacity': '1',
            'visibility': 'visible'
        });
    }

    function removeLoadingAnimation() {
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;

        $('.loading-dots-container', render).remove();
    }
    
    // Вспомогательные функции
    function getCardType(card) {
        var type = card.media_type || card.type;
        if (type === 'movie' || type === 'tv') return type;
        return card.name || card.original_name ? 'tv' : 'movie';
    }
    
    function getRatingClass(rating) {
        if (rating >= 8.5) return 'rating--green';
        if (rating >= 7.0) return 'rating--lime';
        if (rating >= 5.0) return 'rating--orange';
        return 'rating--red';
    }
    
    // Основная функция
    function fetchAdditionalRatings(card) {
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
    
        var normalizedCard = {
            id: card.id,
            imdb_id: card.imdb_id || card.imdb || null,
            title: card.title || card.name || '',
            original_title: card.original_title || card.original_name || '',
            type: getCardType(card),
            release_date: card.release_date || card.first_air_date || ''
        };
    
        var rateLine = $('.full-start-new__rate-line', render);
        if (rateLine.length) {
            rateLine.css('visibility', 'hidden');
            addLoadingAnimation();
        }
        
        var cacheKey = normalizedCard.type + '_' + (normalizedCard.imdb_id || normalizedCard.id);
        var cachedData = getOmdbCache(cacheKey);
        var cachedKpData = getKpCache(cacheKey);
        var ratingsData = {};
        
        // Статусы рейтингов
        var kpElement = $('.rate--kp:not(.hide)', render);
        var imdbElement = $('.rate--imdb:not(.hide)', render);
        
        // Проверяем, что оба рейтинга уже есть и содержат числовые значения
        var kpExists = kpElement.length > 0 && !!kpElement.find('> div').eq(0).text().trim();
        var imdbExists = imdbElement.length > 0 && !!imdbElement.find('> div').eq(0).text().trim();
        
        // Если есть оба - пропускаем запрос к KP API
        if (kpExists && imdbExists) {
            processNextStep();
            return;
        }
                
        // 1. Обрабатываем кеш Кинопоиска
        if (cachedKpData) {
            ratingsData.kp = cachedKpData.kp;
            ratingsData.imdb_kp = cachedKpData.imdb; 
            processNextStep();
        } else {
            getKinopoiskRatingByNormalizedCard(normalizedCard, KP_API_KEY, function(kpRatings) {
                if (kpRatings) {
                    if (kpRatings.kinopoisk) {
                        ratingsData.kp = kpRatings.kinopoisk;
                    }
                    if (kpRatings.imdb) {
                        ratingsData.imdb_kp = kpRatings.imdb; // если хочешь сохранить отдельно, или сравнить
                    }
                    saveKpCache(cacheKey, { kp: kpRatings.kinopoisk, imdb: kpRatings.imdb });
                }
                processNextStep();
            });
            return; // Выходим, продолжим в колбэке
        }
        
        function processNextStep() {
            // 2. Обрабатываем кеш OMDB
            if (cachedData) {
                ratingsData.rt = cachedData.rt;
                ratingsData.mc = cachedData.mc;
                ratingsData.imdb = cachedData.imdb;
                ratingsData.ageRating = cachedData.ageRating;
                ratingsData.oscars = cachedData.oscars;
                updateUI();
            } else if (normalizedCard.imdb_id) {
                fetchOmdbRatings(normalizedCard, cacheKey, function(omdbData) {
                    if (omdbData) {
                        ratingsData.rt = omdbData.rt;
                        ratingsData.mc = omdbData.mc;
                        ratingsData.imdb = omdbData.imdb;
                        ratingsData.ageRating = omdbData.ageRating;
                        ratingsData.oscars = omdbData.oscars;
                        saveOmdbCache(cacheKey, omdbData);
                    }
                    updateUI();
                });
            } else {
                getImdbIdFromTmdb(normalizedCard.id, normalizedCard.type, function(newImdbId) {
                    if (newImdbId) {
                        normalizedCard.imdb_id = newImdbId;
                        cacheKey = normalizedCard.type + '_' + newImdbId;
                        fetchOmdbRatings(normalizedCard, cacheKey, function(omdbData) {
                            if (omdbData) {
                                ratingsData.rt = omdbData.rt;
                                ratingsData.mc = omdbData.mc;
                                ratingsData.imdb = omdbData.imdb;
                                ratingsData.ageRating = omdbData.ageRating;
                                ratingsData.oscars = omdbData.oscars;
                                saveOmdbCache(cacheKey, omdbData);
                            }
                            updateUI();
                        });
                    } else {
                        updateUI();
                    }
                });
            }
        }
        
        function updateUI() {
            // Вставляем рейтинги RT и MC
            insertRatings(ratingsData.rt, ratingsData.mc, ratingsData.oscars);
            
            // Обновляем скрытые элементы
            updateHiddenElements(ratingsData);
            
            // Считаем и отображаем средний рейтинг
            calculateAverageRating();
        }
    }
    
    // Функции работы с кешем
    function getOmdbCache(key) {
        var cache = Lampa.Storage.get(OMDB_CACHE) || {};
        var item = cache[key];
        return item && (Date.now() - item.timestamp < CACHE_TIME) ? item : null;
    }

    function saveOmdbCache(key, data) {
        // Проверяем валидные рейтинги
        var hasValidRating = (
            (data.rt && data.rt !== "N/A") ||
            (data.mc && data.mc !== "N/A") ||
            (data.imdb && data.imdb !== "N/A")
        );
        
        // Проверяем валидный возрастной рейтинг
        var hasValidAgeRating = (
            data.ageRating && 
            data.ageRating !== "N/A" && 
            data.ageRating !== "Not Rated"
        );
        
        // Также считаем наличие Оскаров поводом кешировать
        var hasOscars = typeof data.oscars === 'number' && data.oscars > 0;

        if (!hasValidRating && !hasValidAgeRating && !hasOscars) return;
        
        var cache = Lampa.Storage.get(OMDB_CACHE) || {};
        cache[key] = { 
            rt: data.rt,
            mc: data.mc,
            imdb: data.imdb,
            ageRating: data.ageRating,
            oscars: data.oscars || null,
            timestamp: Date.now() 
        };
        Lampa.Storage.set(OMDB_CACHE, cache);
    }

    // Функции для работы с кешем Кинопоиска
    function getKpCache(key) {
        var cache = Lampa.Storage.get(KP_CACHE) || {};
        var item = cache[key];
        return item && (Date.now() - item.timestamp < CACHE_TIME) ? item : null;
    }
    
    function saveKpCache(key, data) {
        if (!data || (!data.kp && !data.imdb)) return;
    
        var cache = Lampa.Storage.get(KP_CACHE) || {};
    
        cache[key] = {
            kp: data.kp || null,
            imdb: data.imdb || null,
            timestamp: Date.now()
        };
    
        Lampa.Storage.set(KP_CACHE, cache);
    }
    
    function getImdbIdFromTmdb(tmdbId, type, callback) {
        if (!tmdbId) return callback(null);
        
        var cleanType = type === 'movie' ? 'movie' : 'tv';
        var cacheKey = cleanType + '_' + tmdbId;
        var cache = Lampa.Storage.get(ID_MAPPING_CACHE) || {};
        
        if (cache[cacheKey] && (Date.now() - cache[cacheKey].timestamp < CACHE_TIME)) {
            return callback(cache[cacheKey].imdb_id);
        }
    
        var url = 'https://api.themoviedb.org/3/' + cleanType + '/' + tmdbId + '/external_ids?api_key=' + Lampa.TMDB.key();
    
        var makeRequest = function(url, success, error) {
            new Lampa.Reguest().silent(url, success, function() {
                new Lampa.Reguest().native(url, function(data) {
                    try {
                        success(typeof data === 'string' ? JSON.parse(data) : data);
                    } catch(e) {
                        error();
                    }
                }, error, false, { dataType: 'json' });
            });
        };
    
        makeRequest(url, function(data) {
            if (data && data.imdb_id) {
                cache[cacheKey] = {
                    imdb_id: data.imdb_id,
                    timestamp: Date.now()
                };
                Lampa.Storage.set(ID_MAPPING_CACHE, cache);
                callback(data.imdb_id);
            } else {
                if (cleanType === 'tv') {
                    var altUrl = 'https://api.themoviedb.org/3/tv/' + tmdbId + '?api_key=' + Lampa.TMDB.key();
                    makeRequest(altUrl, function(altData) {
                        var imdbId = (altData && altData.external_ids && altData.external_ids.imdb_id) || null;
                        if (imdbId) {
                            cache[cacheKey] = {
                                imdb_id: imdbId,
                                timestamp: Date.now()
                            };
                            Lampa.Storage.set(ID_MAPPING_CACHE, cache);
                        }
                        callback(imdbId);
                    }, function() {
                        callback(null);
                    });
                } else {
                    callback(null);
                }
            }
        }, function() {
            callback(null);
        });
    }

    // Модифицируем fetchOmdbRatings для поддержки callback
    function fetchOmdbRatings(card, cacheKey, callback) {
        if (!card.imdb_id) {
            callback(null);
            return;
        }
        
        var url = 'https://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&i=' + card.imdb_id;
        
        new Lampa.Reguest().silent(url, function(data) {
            if (data && data.Response === 'True' && (data.Ratings || data.imdbRating)) {
                callback({
                    rt: extractRating(data.Ratings, 'Rotten Tomatoes'),
                    mc: extractRating(data.Ratings, 'Metacritic'),
                    imdb: data.imdbRating || null,
                    ageRating: data.Rated || null,
                    oscars: parseOscars(data.Awards || '')
                });
            } else {
                callback(null);
            }
        }, function() {
            callback(null);
        });
    }
    
    function updateHiddenElements(ratings) {
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
        
        // Обновление возрастного рейтинга с проверкой "Not Rated"
        var pgElement = $('.full-start__pg.hide', render);
        if (pgElement.length && ratings.ageRating) {
            var invalidRatings = ['N/A', 'Not Rated', 'Unrated'];
            var isValid = invalidRatings.indexOf(ratings.ageRating) === -1;
            
            if (isValid) {
                var localizedRating = AGE_RATINGS[ratings.ageRating] || ratings.ageRating;
                pgElement.removeClass('hide').text(localizedRating);
            }
        }
        
        var imdbElement = $('.rate--imdb.hide', render);
        if (imdbElement.length) {
            var imdbRating; // Объявляем переменную один раз в начале
            
            if (ratings.imdb && !isNaN(ratings.imdb)) {
                imdbRating = parseFloat(ratings.imdb).toFixed(1);
                imdbElement.removeClass('hide').find('> div').eq(0).text(imdbRating);
            }
            else if (ratings.imdb_kp && !isNaN(ratings.imdb_kp)) {
                imdbRating = parseFloat(ratings.imdb_kp).toFixed(1);
                imdbElement.removeClass('hide').find('> div').eq(0).text(imdbRating);
            }
        }
        
        var kpElement = $('.rate--kp.hide', render);
        if (kpElement.length && ratings.kp && !isNaN(ratings.kp)) {
            var kpRating = parseFloat(ratings.kp).toFixed(1);
            kpElement.removeClass('hide').find('> div').eq(0).text(kpRating);
        }
    }
    
    // Вспомогательные функции
    function extractRating(ratings, source) {
        if (!ratings || !Array.isArray(ratings)) return null;
        
        for (var i = 0; i < ratings.length; i++) {
            if (ratings[i].Source === source) {
                try {
                    return source === 'Rotten Tomatoes' 
                        ? parseFloat(ratings[i].Value.replace('%', '')) 
                        : parseFloat(ratings[i].Value.split('/')[0]);
                } catch(e) {
                    console.error('Ошибка при парсинге рейтинга:', e);
                    return null;
                }
            }
        }
        return null;
    }
    
    function insertRatings(rtRating, mcRating, oscars) {
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
    
        var rateLine = $('.full-start-new__rate-line', render);
        if (!rateLine.length) return;
    
        var lastRate = $('.full-start__rate:last', rateLine);
        
        if (rtRating && !isNaN(rtRating) && !$('.rate--rt', rateLine).length) {
            var rtElement = $(
                '<div class="full-start__rate rate--rt">' +
                    '<div>' + rtRating + '</div>' +
                    '<div class="source--name">Tomatoes</div>' +
                '</div>'
            );
            
            if (lastRate.length) {
                rtElement.insertAfter(lastRate);
            } else {
                rateLine.prepend(rtElement);
            }
        }
    
        if (mcRating && !isNaN(mcRating) && !$('.rate--mc', rateLine).length) {
            var insertAfter = $('.rate--rt', rateLine).length ? $('.rate--rt', rateLine) : lastRate;
            var mcElement = $(
                '<div class="full-start__rate rate--mc">' +
                    '<div>' + mcRating + '</div>' +
                    '<div class="source--name">Metacritic</div>' +
                '</div>'
            );
            
            if (insertAfter.length) {
                mcElement.insertAfter(insertAfter);
            } else {
                rateLine.prepend(mcElement);
            }
        }
    
        if (oscars && !isNaN(oscars) && oscars > 0 && !$('.rate--oscars', rateLine).length) {
            var oscarsElement = $(
                '<div class="full-start__rate rate--oscars">' +
                    '<div>' + oscars + '</div>' +
                    '<div class="source--name">' + Lampa.Lang.translate("maxsm_omdb_oscars") + '</div>' +
                '</div>'
            );
            rateLine.prepend(oscarsElement); // Просто вставляем в начало
        }
    }
    
    function calculateAverageRating() {
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
    
        var rateLine = $('.full-start-new__rate-line', render);
        if (!rateLine.length) return;
    
        var ratings = {
            imdb: parseFloat($('.rate--imdb div:first', rateLine).text()) || 0,
            tmdb: parseFloat($('.rate--tmdb div:first', rateLine).text()) || 0,
            kp: parseFloat($('.rate--kp div:first', rateLine).text()) || 0,
            mc: (parseFloat($('.rate--mc div:first', rateLine).text()) || 0) / 10,
            rt: (parseFloat($('.rate--rt div:first', rateLine).text()) || 0) / 10
        };
    
        var totalWeight = 0;
        var weightedSum = 0;
        var ratingsCount = 0;
        
        for (var key in ratings) {
            if (ratings.hasOwnProperty(key) && !isNaN(ratings[key]) && ratings[key] > 0) {
                weightedSum += ratings[key] * WEIGHTS[key];
                totalWeight += WEIGHTS[key];
                ratingsCount++;
            }
        }
    
        $('.rate--avg', rateLine).remove();
    
        if (ratingsCount > 1 && totalWeight > 0) {
            var averageRating = weightedSum / totalWeight;
            var colorClass = getRatingClass(averageRating);
            
            var avgElement = $(
                '<div class="full-start__rate rate--avg ' + colorClass + '">' +
                    '<div>' + averageRating.toFixed(1) + '</div>' +
                    '<div class="source--name">' + Lampa.Lang.translate("ratimg_omdb_avg") + '</div>' +
                '</div>'
            );
            
            $('.full-start__rate:first', rateLine).before(avgElement);
        }
        
        removeLoadingAnimation();
        rateLine.css('visibility', 'visible');
    }
    
    // Инициализация плагина
    function startPlugin() {
        window.combined_ratings_plugin = true;
        Lampa.Listener.follow('full', function(e) {
            if (e.type === 'complite') {
                setTimeout(function() {
                    fetchAdditionalRatings(e.data.movie);
                }, 500);
            }
        });
    }
    
    if (!window.combined_ratings_plugin) startPlugin();
})();