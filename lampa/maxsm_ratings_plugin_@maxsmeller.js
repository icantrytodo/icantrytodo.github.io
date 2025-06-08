(function() {
    'use strict';
    
    console.log("MAXSM-RATINGS: Start");     
    
    Lampa.Lang.add({
        maxsm_ratings_plugin: {
            ru: 'Рейтинг',
            en: 'Rating',
            uk: 'Рейтинг',
            be: 'Рэйтынг',
            pt: 'Classificação',
            zh: '评分',
            he: 'דירוג',
            cs: 'Hodnocení',
            bg: 'Рейтинг'
        },
        maxsm_ratings_plugin_colors: {
            ru: 'Цвета',
            en: 'Colors',
            uk: 'Кольори',
            be: 'Колеры',
            pt: 'Cores',
            zh: '颜色',
            he: 'צבעים',
            cs: 'Barvy',
            bg: 'Цветове'
        },
        maxsm_ratings_plugin_avg: {
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
        maxsm_ratings_plugin_simplemode: {
            ru: 'Только средняя оценка',
            en: 'Only average rating',
            uk: 'Лише середня оцінка',
            be: 'Толькі сярэдняя ацэнка',
            pt: 'Apenas avaliação média',
            zh: '仅显示平均评分',
            he: 'רק דירוג ממוצע',
            cs: 'Pouze průměrné hodnocení',
            bg: 'Само средна оценка'
        },
        maxsm_ratings_plugin_avg_simple: {
            ru: 'Оценка',
            en: 'Rating',
            uk: 'Оцінка',
            be: 'Ацэнка',
            pt: 'Avaliação',
            zh: '评分',
            he: 'דירוג',
            cs: 'Hodnocení',
            bg: 'Оценка'
        },
        maxsm_ratings_plugin_loading: {
            ru: 'Загрузка',
            en: 'Loading',
            uk: 'Завантаження',
            be: 'Загрузка',
            pt: 'Carregando',
            zh: '加载中',
            he: 'טוען',
            cs: 'Načítání',
            bg: 'Зареждане'
        },
        maxsm_ratings_plugin_oscars: { 
            ru: 'Оскар',
            en: 'Oscar',
            uk: 'Оскар',
            be: 'Оскар',
            pt: 'Oscar',
            zh: '奥斯卡奖',
            he: 'אוסקר',
            cs: 'Oscar',
            bg: 'Оскар'
        },
        maxsm_ratings_plugin_awards: {
            ru: 'Награды',
            en: 'Awards',
            uk: 'Нагороди',
            be: 'Узнагароды',
            pt: 'Prêmios',
            zh: '奖项',
            he: 'פרסים',
            cs: 'Ocenění',
            bg: 'Награди'
        }
    });

    // Стили
    var style = "<style id=\"maxsm_ratings_plugin\">" +
        ".full-start-new__rate-line {" +
        "visibility: hidden;" +
        "flex-wrap: wrap;" +
        " gap: 0.4em 0;" +
        "}" +
        ".full-start-new__rate-line > * {" +
        "    margin-left: 0 !important;" +
        "    margin-right: 0.6em !important;" +
        "}" +
        ".rate--green  { color: #4caf50; }" +
        ".rate--lime   { color: #cddc39; }" +
        ".rate--orange { color: #ff9800; }" +
        ".rate--red    { color: #f44336; }" +
        ".rate--gold   { color: gold;    }" +
        "</style>";
    
    Lampa.Template.add('maxsm_ratings_plugin_css', style);
    $('body').append(Lampa.Template.get('maxsm_ratings_plugin_css', {}, true));
    
    // Обновленные стили с гарантированной видимостью
    /*
    var loadingStyles = "<style id=\"maxsm_ratings_plugin_loading_animation\">" +
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
        */
        
        var loadingStyles = "<style id=\"maxsm_ratings_plugin_loading_animation\">" +
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
                    "    opacity: 0.3;" +
                    "    animation: loading-dots-fade 1.5s infinite both;" + // Увеличил длительность для плавности
                    "}" +
                    ".loading-dots__dot:nth-child(1) {" +
                    "    animation-delay: 0s;" +
                    "}" +
                    ".loading-dots__dot:nth-child(2) {" +
                    "    animation-delay: 0.5s;" + // Задержка = 1/3 от 1.5s
                    "}" +
                    ".loading-dots__dot:nth-child(3) {" +
                    "    animation-delay: 1s;" +    // Задержка = 2/3 от 1.5s
                    "}" +
                    "@keyframes loading-dots-fade {" +
                    "    0%, 90%, 100% { opacity: 0.3; }" + // Точка тусклая в начале, после 33% и в конце
                    "    35% { opacity: 1; }" +             // Пик яркости на середине своего отрезка
                    "}" +
                    "</style>";


    Lampa.Template.add('maxsm_ratings_plugin_loading_animation_css', loadingStyles);
    $('body').append(Lampa.Template.get('maxsm_ratings_plugin_loading_animation_css', {}, true));
    
    // Конфигурация
    var CACHE_TIME = 3 * 24 * 60 * 60 * 1000; // 3 дня
    var OMDB_CACHE = 'maxsm_ratings_plugin_omdb';
    var KP_CACHE = 'maxsm_ratings_plugin_kp';
    var ID_MAPPING_CACHE = 'maxsm_ratings_plugin_id_mapping';
    var OMDB_API_KEYS = (window.RATINGS_PLUGIN_TOKENS && window.RATINGS_PLUGIN_TOKENS.OMDB_API_KEYS) || [];
    var KP_API_KEYS   = (window.RATINGS_PLUGIN_TOKENS && window.RATINGS_PLUGIN_TOKENS.KP_API_KEYS)   || [];
    
    var PROXY_LIST = [
        'https://cors.bwa.workers.dev/',
        'https://api.allorigins.win/raw?url=',  
        'https://open.corsproxy.io/?url=',
        'https://corsproxy.io/?',               
        'https://thingproxy.freeboard.io/fetch/'
    ];
    
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
    
    // Берем случайный токен из массива
    function getRandomToken(arr) {
      if (!arr || !arr.length) return '';
      return arr[Math.floor(Math.random() * arr.length)];
    }
    
    // Получаем количество Оскаров и других выигранных наград
    function parseAwards(awardsText) {
        if (typeof awardsText !== 'string') return null;
        console.log("MAXSM-RATINGS: Parse awards: " + awardsText);
    
        var result = {
            oscars: 0,
            awards: 0
        };
    
        var oscarMatch = awardsText.match(/Won (\d+) Oscars?/i);
        if (oscarMatch && oscarMatch[1]) {
            result.oscars = parseInt(oscarMatch[1], 10);
            console.log("MAXSM-RATINGS: Oscars: " + result.oscars);
        }
    
        var otherMatch = awardsText.match(/Another (\d+) wins?/i);
        if (otherMatch && otherMatch[1]) {
            result.awards = parseInt(otherMatch[1], 10);
            console.log("MAXSM-RATINGS: Awards (Another): " + result.awards);
        }
    
        if (result.awards === 0) {
            var simpleMatch = awardsText.match(/(\d+) wins?/i);
            if (simpleMatch && simpleMatch[1]) {
                result.awards = parseInt(simpleMatch[1], 10);
                console.log("MAXSM-RATINGS: Awards (Simple): " + result.awards);
            }
        }
    
        return result;
    }
    
    // Получение данных через прокси, для KP
    function fetchWithProxy(url, callback) {
        var currentProxy = 0;
        
        function tryNextProxy() {
            if (currentProxy >= PROXY_LIST.length) {
                callback(new Error('All proxies failed'));
                return;
            }
            
            var proxyUrl = PROXY_LIST[currentProxy] + encodeURIComponent(url);
            console.log("MAXSM-RATINGS: Fetch with proxy: " + proxyUrl);
            
            fetch(proxyUrl)
                .then(function(response) {
                    if (!response.ok) throw new Error('Proxy error: ' + response.status);
                    return response.text();
                })
                .then(function(data) {
                    callback(null, data);
                })
                .catch(function() {
                    currentProxy++;
                    tryNextProxy();
                });
        }
        
        tryNextProxy();
    }
    
    // Получение данных с КП
    function getKinopoiskRatingByNormalizedCard(normalizedCard, apiKey, callback) {
        console.log("MAXSM-RATINGS: Get KP ratings");
        console.log("MAXSM-RATINGS: Get KP inf");
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
            
            // Ищем лучший матч: сначала по imdb_id, потом по году
            var bestMatch = null;
            console.log("MAXSM-RATINGS: Match KP inf");
            for (var j = 0; j < data.films.length; j++) {
                var film2 = data.films[j];
                if (film2.year && String(film2.year).indexOf(String(year)) === 0) {
                    bestMatch = film2;
                    console.log("MAXSM-RATINGS: KP best match for: " + queryTitle + " / " + year + " is id: " + bestMatch.filmId  + " / " + film2.nameRu + " / " + film2.nameEn + " / " + film2.year);
                    break;
                }
            }
            
            if (!bestMatch || !bestMatch.filmId) {
                callback(null);
                return;
            }
            
            var xmlUrl = 'https://rating.kinopoisk.ru/' + bestMatch.filmId + '.xml';
            
            fetchWithProxy(xmlUrl, function(error, xmlText) {
                console.log("MAXSM-RATINGS: Try to get KP ratings from XML");
                if (!error && xmlText) {
                    // Изменения в блоке XML-парсинга:
                    try {
                        var parser = new DOMParser();
                        var xmlDoc = parser.parseFromString(xmlText, "text/xml");
                        var kpRatingNode = xmlDoc.getElementsByTagName("kp_rating")[0];
                        var imdbRatingNode = xmlDoc.getElementsByTagName("imdb_rating")[0];
                        
                        // Преобразуем строки в числа и проверяем, что они > 0
                        var kpRating = kpRatingNode ? parseFloat(kpRatingNode.textContent) : null;
                        var imdbRating = imdbRatingNode ? parseFloat(imdbRatingNode.textContent) : null;
                        
                        // Проверяем, что значения являются числами и больше 0
                        var hasValidKp = !isNaN(kpRating) && kpRating > 0;
                        var hasValidImdb = !isNaN(imdbRating) && imdbRating > 0;
                        
                        if (hasValidKp || hasValidImdb) {
                            console.log("MAXSM-RATINGS: Got KP ratings from XML");
                            return callback({
                                kinopoisk: hasValidKp ? kpRating : null,
                                imdb: hasValidImdb ? imdbRating : null
                            });
                        }
                    } catch (e) {
                        console.log("MAXSM-RATINGS: XML parse error, fallback to API");
                    }
                }
                
                // Если XML не сработал, пробуем API
                console.log("MAXSM-RATINGS: Try to get KP ratings from API");
                fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/' + bestMatch.filmId, {
                    headers: { 'X-API-KEY': apiKey }
                })
                    .then(function(response) {
                        if (!response.ok) throw new Error('API error');
                        return response.json();
                    })
                    .then(function(data) {
                        console.log("MAXSM-RATINGS: Got KP ratings from API");
                        callback({
                            kinopoisk: data.ratingKinopoisk || null,
                            imdb: data.ratingImdb || null
                        });
                    })
                    .catch(function() {
                        callback(null);
                    });
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
                    '<span class="loading-dots__text">' + Lampa.Lang.translate("maxsm_ratings_plugin_loading") + '</span>' +
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
        if (rating >= 8.5) return 'rate--green';
        if (rating >= 7.0) return 'rate--lime';
        if (rating >= 5.0) return 'rate--orange';
        return 'rate--red';
    }
    
    // Основная функция
    function fetchAdditionalRatings(card) {
        console.log("MAXSM-RATINGS: Fetch additional ratings");
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
    
        var normalizedCard = {
            id: card.id,
            //kp_id: card.kp_id || card.kinopoisk_id || card.kinopoiskId || card.filmId,
            imdb_id: card.imdb_id || card.imdb || null,
            title: card.title || card.name || '',
            original_title: card.original_title || card.original_name || '',
            type: getCardType(card),
            release_date: card.release_date || card.first_air_date || ''
        };
        
        console.log("MAXSM-RATINGS: Card id: " + normalizedCard.id + " imdb id: " + normalizedCard.imdb_id + " title: " + normalizedCard.title + " orig: " + normalizedCard.original_title + " type: " + normalizedCard.type + " date: " + normalizedCard.release_date);
        
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
            console.log("MAXSM-RATINGS: Skip KP ratings, allrady in card");
            processNextStep();
            return;
        }
                
        // 1. Обрабатываем кеш Кинопоиска
        if (cachedKpData) {
            ratingsData.kp = cachedKpData.kp;
            ratingsData.imdb_kp = cachedKpData.imdb; 
            console.log("MAXSM-RATINGS: Get KP ratings from cache");
            processNextStep();
        } else {
            getKinopoiskRatingByNormalizedCard(normalizedCard, getRandomToken(KP_API_KEYS), function(kpRatings) {
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
            updateHiddenElements(ratingsData);
            // 2. Обрабатываем кеш OMDB
            if (cachedData) {
                ratingsData.rt = cachedData.rt;
                ratingsData.mc = cachedData.mc;
                ratingsData.imdb = cachedData.imdb;
                ratingsData.ageRating = cachedData.ageRating;
                ratingsData.oscars = cachedData.oscars;
                ratingsData.awards = cachedData.awards;
                console.log("MAXSM-RATINGS: Get OMDB ratings from cache");
                updateUI();
            } else if (normalizedCard.imdb_id) {
                fetchOmdbRatings(normalizedCard, cacheKey, function(omdbData) {
                    if (omdbData) {
                        ratingsData.rt = omdbData.rt;
                        ratingsData.mc = omdbData.mc;
                        ratingsData.imdb = omdbData.imdb;
                        ratingsData.ageRating = omdbData.ageRating;
                        ratingsData.oscars = omdbData.oscars;
                        ratingsData.awards = omdbData.awards;
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
                                ratingsData.awards = omdbData.awards;
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
            insertRatings(ratingsData.rt, ratingsData.mc, ratingsData.oscars, ratingsData.awards);
            
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
        var hasAwards = typeof data.awards === 'number' && data.awards > 0;

        if (!hasValidRating && !hasValidAgeRating && !hasOscars&& !hasAwards) return;
        
        console.log("MAXSM-RATINGS: Save OMDB cache");
        
        var cache = Lampa.Storage.get(OMDB_CACHE) || {};
        cache[key] = { 
            rt: data.rt,
            mc: data.mc,
            imdb: data.imdb,
            ageRating: data.ageRating,
            oscars: data.oscars || null,
            awards: data.awards || null,
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
        
        console.log("MAXSM-RATINGS: Save KP cache");
    
        var cache = Lampa.Storage.get(KP_CACHE) || {};
    
        cache[key] = {
            kp: data.kp || null,
            imdb: data.imdb || null,
            timestamp: Date.now()
        };
    
        Lampa.Storage.set(KP_CACHE, cache);
    }
    
    function getImdbIdFromTmdb(tmdbId, type, callback) {
        console.log("MAXSM-RATINGS: Get IMDb id From TMDB");
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
        console.log("MAXSM-RATINGS: Fetch OMDB ratings");
        
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;   
        
        // Статусы рейтингов
        var pgElement = $('.full-start__pg:not(.hide)', render);
        var imdbElement = $('.rate--imdb:not(.hide)', render);
        
        // Проверяем, что оба рейтинга уже есть и содержат числовые значения
        var pgExists = pgElement.length > 0 && !!pgElement.text().trim();
        var imdbExists = imdbElement.length > 0 && !!imdbElement.find('> div').eq(0).text().trim();

        // Проверяем тип контента (если 'tv' — пропускаем запрос)
        if (card.type === 'tv' && (pgExists && imdbExists)) {
            console.log("MAXSM-RATINGS: Skip fetching OMDB for TV show with PG and IMDB ratings");
            callback(null);
            return;
        }
        
        if (!card.imdb_id) {
            callback(null);
            return;
        }
        
        var url = 'https://www.omdbapi.com/?apikey=' + getRandomToken(OMDB_API_KEYS) + '&i=' + card.imdb_id;
        
        new Lampa.Reguest().silent(url, function(data) {
            if (data && data.Response === 'True' && (data.Ratings || data.imdbRating)) {
                console.log("MAXSM-RATINGS: Got OMDB ratings from API");
                var parsedAwards = parseAwards(data.Awards || '');
                callback({
                    rt: extractRating(data.Ratings, 'Rotten Tomatoes'),
                    mc: extractRating(data.Ratings, 'Metacritic'),
                    imdb: data.imdbRating || null,
                    ageRating: data.Rated || null,
                    oscars: parsedAwards.oscars,
                    awards: parsedAwards.awards
                });
            } else {
                callback(null);
            }
        }, function() {
            callback(null);
        });
    }
    
    function updateHiddenElements(ratings) {
        console.log("MAXSM-RATINGS: Update hidden elements");
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
        
        // Обновление возрастного рейтинга с проверкой "Not Rated"
        var pgElement = $('.full-start__pg.hide', render);
        if (pgElement.length && ratings.ageRating) {
            var invalidRatings = ['N/A', 'Not Rated', 'Unrated'];
            var isValid = invalidRatings.indexOf(ratings.ageRating) === -1;
            
            if (isValid) {
                console.log("MAXSM-RATINGS: Insert PG");
                var localizedRating = AGE_RATINGS[ratings.ageRating] || ratings.ageRating;
                pgElement.removeClass('hide').text(localizedRating);
            }
        }
        
        var imdbElement = $('.rate--imdb.hide', render);
        if (imdbElement.length) {
            var imdbRating; // Объявляем переменную один раз в начале
            
            if (ratings.imdb && !isNaN(ratings.imdb)) {
                console.log("MAXSM-RATINGS: Insert IMDB from OMDB");
                imdbRating = parseFloat(ratings.imdb).toFixed(1);
                imdbElement.removeClass('hide').find('> div').eq(0).text(imdbRating);
            }
            else if (ratings.imdb_kp && !isNaN(ratings.imdb_kp)) {
                console.log("MAXSM-RATINGS: Insert IMDB from KP");
                imdbRating = parseFloat(ratings.imdb_kp).toFixed(1);
                imdbElement.removeClass('hide').find('> div').eq(0).text(imdbRating);
            }
        }
        
        var kpElement = $('.rate--kp.hide', render);
        if (kpElement.length && ratings.kp && !isNaN(ratings.kp)) {
            console.log("MAXSM-RATINGS: Insert KP");
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
    
    function insertRatings(rtRating, mcRating, oscars, awards) {
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
    
        var rateLine = $('.full-start-new__rate-line', render);
        if (!rateLine.length) return;
    
        var lastRate = $('.full-start__rate:last', rateLine);
        
        var showRT = localStorage.getItem('maxsm_ratings_plugin_tomatoes')  === 'true';
        
        var showMC = localStorage.getItem('maxsm_ratings_plugin_metacritic')  === 'true';
        
        if (showRT && rtRating && !isNaN(rtRating) && !$('.rate--rt', rateLine).length) {
            console.log("MAXSM-RATINGS: Insert Tomatoes");
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
    
        if (showMC && mcRating && !isNaN(mcRating) && !$('.rate--mc', rateLine).length) {
            console.log("MAXSM-RATINGS: Insert Metacritic");
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
        
        var showAwards = localStorage.getItem('maxsm_ratings_plugin_awards') === 'true';
        var showOscar =  localStorage.getItem('maxsm_ratings_plugin_oscars')  === 'true';
        var showColors = localStorage.getItem('maxsm_ratings_plugin_colors')  === 'true';
        
        if (showAwards && awards && !isNaN(awards) && awards > 0 && !$('.rate--awards', rateLine).length) {
            console.log("MAXSM-RATINGS: Insert Awards");
            var awardsElement = $(
                '<div class="full-start__rate rate--awards rate--gold">' +
                    '<div>' + awards + '</div>' +
                    '<div class="source--name">' + Lampa.Lang.translate("maxsm_ratings_plugin_awards") + '</div>' +
                '</div>'
            );
            if (!showColors) { 
                awardsElement.removeClass('rate--gold'); 
            }
            rateLine.prepend(awardsElement); // Просто вставляем в начало
        }
    
        if (showOscar && oscars && !isNaN(oscars) && oscars > 0 && !$('.rate--oscars', rateLine).length) {
            console.log("MAXSM-RATINGS: Insert Oscars");
            var oscarsElement = $(
                '<div class="full-start__rate rate--oscars rate--gold">' +
                    '<div>' + oscars + '</div>' +
                    '<div class="source--name">' + Lampa.Lang.translate("maxsm_ratings_plugin_oscars") + '</div>' +
                '</div>'
            );
            if (!showColors) { 
                oscarsElement.removeClass('rate--gold'); 
            }
            rateLine.prepend(oscarsElement); // Просто вставляем в начало
        }
    }
    
    function calculateAverageRating() {
        console.log("MAXSM-RATINGS: Calculate avarage rating");
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
        
        var simplemode = localStorage.getItem('maxsm_ratings_plugin_simplemode') === 'true';
        console.log("MAXSM-RATINGS: Simple mode: " + simplemode);
        
        if (totalWeight > 0 && (ratingsCount > 1 || simplemode)) {
            var averageRating = ( weightedSum / totalWeight ).toFixed(1);
            var colorClass = getRatingClass(averageRating);
            
            console.log("MAXSM-RATINGS: Average rating: " + averageRating);
            
            var avgLabel = Lampa.Lang.translate("maxsm_ratings_plugin_avg");
            
            if (simplemode) {
                avgLabel = Lampa.Lang.translate("maxsm_ratings_plugin_avg_simple");
                $('.full-start__rate', rateLine).not('.rate--oscars, .rate--avg, .rate--awards').hide();
            } 

            var avgElement = $(
                '<div class="full-start__rate rate--avg ' + colorClass + '">' +
                    '<div>' + averageRating + '</div>' +
                    '<div class="source--name">' + avgLabel + '</div>' +
                '</div>'
            );

            var showColors = localStorage.getItem('maxsm_ratings_plugin_colors')  === 'true';
            
            if (!showColors) { 
                avgElement.removeClass(colorClass); 
            }
            
            $('.full-start__rate:first', rateLine).before(avgElement);
        }
     
        removeLoadingAnimation();
        rateLine.css('visibility', 'visible');
    }
        
    // Инициализация плагина
    function startPlugin() {
        console.log("MAXSM-RATINGS: initialized"); 
        window.maxsmRatingsPlugin = true;
        
        if (!localStorage.getItem('maxsm_ratings_plugin_oscars')) {
            localStorage.setItem('maxsm_ratings_plugin_oscars', 'true');
        }
        
        if (!localStorage.getItem('maxsm_ratings_plugin_awards')) {
            localStorage.setItem('maxsm_ratings_plugin_awards', 'true');
        }
        
        if (!localStorage.getItem('maxsm_ratings_plugin_metacritic')) {
            localStorage.setItem('maxsm_ratings_plugin_metacritic', 'true');
        }
        
        if (!localStorage.getItem('maxsm_ratings_plugin_tomatoes')) {
            localStorage.setItem('maxsm_ratings_plugin_tomatoes', 'true');
        }
        
        if (!localStorage.getItem('maxsm_ratings_plugin_colors')) {
            localStorage.setItem('maxsm_ratings_plugin_colors', 'true');
        }
        
        Lampa.SettingsApi.addComponent({
            component: "maxsm_ratings_plugin",
            name: Lampa.Lang.translate("maxsm_ratings_plugin"),
            icon: '<svg viewBox="5 5 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="white" stroke-width="2" d="M32 18.7461L36.2922 27.4159L46.2682 28.6834L38.9675 35.3631L40.7895 44.8469L32 40.2489L23.2105 44.8469L25.0325 35.3631L17.7318 28.6834L27.7078 27.4159L32 18.7461ZM32 23.2539L29.0241 29.2648L22.2682 30.1231L27.2075 34.6424L25.9567 41.1531L32 37.9918L38.0433 41.1531L36.7925 34.6424L41.7318 30.1231L34.9759 29.2648L32 23.2539Z"/><path fill="none" stroke="white" stroke-width="2" d="M32 9C19.2975 9 9 19.2975 9 32C9 44.7025 19.2975 55 32 55C44.7025 55 55 44.7025 55 32C55 19.2975 44.7025 9 32 9ZM7 32C7 18.1929 18.1929 7 32 7C45.8071 7 57 18.1929 57 32C57 45.8071 45.8071 57 32 57C18.1929 57 7 45.8071 7 32Z"/></svg>'
        });

        Lampa.SettingsApi.addParam({
            component: "maxsm_ratings_plugin",
            param: {
                name: "maxsm_ratings_plugin_simplemode",
                type: "trigger",
                default: false
            },
            field: {
                name: Lampa.Lang.translate("maxsm_ratings_plugin_simplemode"),
                description: ''
            },
            onChange: function(value) {
            }
        });
        
        Lampa.SettingsApi.addParam({
            component: "maxsm_ratings_plugin",
            param: {
                name: "maxsm_ratings_plugin_oscars",
                type: "trigger",
                default: true
            },
            field: {
                name: Lampa.Lang.translate("maxsm_ratings_plugin_oscars"),
                description: ''
            },
            onChange: function(value) {
            }
        });
        
        Lampa.SettingsApi.addParam({
            component: "maxsm_ratings_plugin",
            param: {
                name: "maxsm_ratings_plugin_awards",
                type: "trigger",
                default: true
            },
            field: {
                name: Lampa.Lang.translate("maxsm_ratings_plugin_awards"),
                description: ''
            },
            onChange: function(value) {
            }
        });

        Lampa.SettingsApi.addParam({
            component: "maxsm_ratings_plugin",
            param: {
                name: "maxsm_ratings_plugin_tomatoes",
                type: "trigger",
                default: true
            },
            field: {
                name: 'Tomatoes',
                description: ''
            },
            onChange: function(value) {
            }
        });
        
        Lampa.SettingsApi.addParam({
            component: "maxsm_ratings_plugin",
            param: {
                name: "maxsm_ratings_plugin_metacritic",
                type: "trigger",
                default: true
            },
            field: {
                name: 'Metacritic',
                description: ''
            },
            onChange: function(value) {
            }
        });
        
        Lampa.SettingsApi.addParam({
            component: "maxsm_ratings_plugin",
            param: {
                name: "maxsm_ratings_plugin_colors",
                type: "trigger",
                default: true
            },
            field: {
                name: Lampa.Lang.translate("maxsm_ratings_plugin_colors"),
                description: ''
            },
            onChange: function(value) {
            }
        });
        
        
        Lampa.Listener.follow('full', function(e) {
            if (e.type === 'complite') {
                setTimeout(function() {
                    fetchAdditionalRatings(e.data.movie);
                }, 500);
            }
        });
    }

    if (!window.maxsmRatingsPlugin) startPlugin();
})();