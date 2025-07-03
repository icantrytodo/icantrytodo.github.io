(function() {
    'use strict';
    
    var settingsToggled = false;
    var allHiddenElements = [];
    var keySequence = [38, 38, 39, 39, 40, 40, 38]; 
    var keyIndex = 0;
    var hideTimeout = null;

    // Селекторы бокового меню
    var sideMenuSelectors = [
        "[data-action=myperson]",
        "[data-action=subscribes]",
        "[data-action=mytorrents]",
        "[data-action=about]",
        "[data-action=catalog]",
        "[data-action=anime]",
        "[data-action=relise]",
        "[data-action=feed]",
        "[data-action=console]"
    ];
    
    // Селекторы настроек
    var settingsSelectors = [
        'div[data-component="account"]',
        'div[data-component="plugins"]',
        'div[data-component="tmdb"]',
        'div[data-component="parser"]',
        'div[data-component="server"]',
        'div[data-component="parental_control"]',
        'div[data-component="lampac_profiles"]',
        'div[data-component="backup"]',
        'div[data-component="lnum_settings"]'
    ];
    
    // Настройки интерфейса
    var interfaceSettings = [
        '[data-name="card_interfice_cover"]',
        '[data-name="advanced_animation"]',
        '[data-name="glass_opacity"]',
        '[data-name="light_version"]',
        '[data-name="card_interfice_reactions"]',
        '[data-name="interface_size"]',
        '[data-name="background_type"]',
        '[data-name="black_style"]',
        '[data-name="interface_sound_level"]',
        '[data-name="mask"]',
        '[data-name="scroll_type"]',
        '[data-name="card_views_type"]',
        '[data-name="hide_outside_the_screen"]',
                {
            selector: '[data-name="card_interfice_type"]',
            additional: function($element) {
                var $title = $element.prev('.settings-param-title');
                if ($title.length) $title.hide();
            }
        },
        {
            selector: '[data-name="background"]',
            additional: function($element) {
                var $title = $element.prev('.settings-param-title');
                if ($title.length) $title.hide();
            }
        },
        {
            selector: '[data-name="glass_style"]',
            additional: function($element) {
                var $title = $element.prev('.settings-param-title');
                if ($title.length) $title.hide();
            }
        },
        {
            selector: '[data-name="card_interfice_poster"]',
            additional: function($element) {
                var $title = $element.prev('.settings-param-title');
                if ($title.length) $title.hide();
            }
        },
        {
            selector: '[data-name="interface_sound_play"]',
            additional: function($element) {
                var $title = $element.prev('.settings-param-title');
                if ($title.length) $title.hide();
            }
        },
    ];
    
    // Дополнительные настройки
    var moreSettings = [
       '[data-name="source"]',
       '[data-name="cache_images"]',
       '[data-name="device_name"]',
       '[data-name="export"]',
        '.helper--start-again',
        '[data-name="screensaver_type"]',
        '[data-name="screensaver_time"]',
        '[data-name="time_offset"]',
        '[data-name="keyboard_type"]',
        '[data-name="pages_save_total"]',
        '[data-name="card_quality"]',     
        '[data-name="card_episodes"]',
                {
            selector: '[data-name="helper"]',
            additional: function($element) {
                var $title = $element.prev('.settings-param-title');
                if ($title.length) $title.hide();
            }
        },
    ];
    
    // Настройки плеера
    var playerSettings = [
        '[data-name="player_timecode"]',
        '[data-name="player_rewind"]',
        '[data-name="player_subs_size"]',
        '[data-name="player_scale_method"]',
        '[data-name="player_hls_method"]',
        '[data-name="subtitles_size"]',
        '[data-name="subtitles_backdrop"]',
        {
            selector: '[data-name="subtitles_start"]',
            additional: function($element) {
                var $title = $element.prev('.settings-param-title');
                if ($title.length) $title.hide();
            }
        },
        '[data-name="player_launch_trailers"]',
        '[data-name="subtitles_stroke"]',
        {
            selector: '[data-name="video_quality_default"]',
            additional: function($element) {
                var $title = $element.prev('.settings-param-title');
                if ($title.length) $title.hide();
            }
        }
    ];
    
    // Элементы заголовка
    var headerElements = [
        ".open--feed",
        ".open--premium",
        ".open--notice",
        ".christmas__button",
        ".icon--blink"
    ];
    
    // Собираем все скрываемые элементы
    allHiddenElements = allHiddenElements.concat(
        sideMenuSelectors, 
        settingsSelectors, 
        playerSettings.map(function(item) {
            return item.selector;
        }),
        moreSettings.map(function(item) {
            return item.selector;
        }),
        interfaceSettings.map(function(item) {
            return typeof item === 'object' ? item.selector : item;
        }),
        headerElements
    );

    // Скрытие элементов заголовка
    function hideHeaderElements() {
        headerElements.forEach(function(selector) {
            $(selector).hide();
        });
    }
    
    // Скрытие элементов бокового меню
    function hideSideMenuSelectors() {
        sideMenuSelectors.forEach(function(selector) {
            $(selector).hide();
        });
    }

    // Скрытие компонентов настроек и возвращение фокуса.
    function hideSettingsComponents() {
        Lampa.Settings.listener.follow('open', function(e) {
            if (e.name === 'main' && !settingsToggled) {
                settingsToggled = true;
//плднимаем свою кнопку аккаунта 
                setTimeout(function() {
                    $('div[data-component="interface"]').before($('div[data-component="account_menu"]'));
                    $('div[data-component="sisi"]').after($('div[data-component="account"]'));
                }, 10);

                setTimeout(function() {
                    settingsSelectors.forEach(function(selector) {
                        $(selector).hide();
                    });
                    Lampa.Controller.toggle('settings');
                }, 50);
            }

            // Обработка настроек интерфейса
            if (e.name === 'interface') {
                interfaceSettings.forEach(function(item) {
                    var selector = typeof item === 'object' ? item.selector : item;
                    var $element = e.body.find(selector);
                    if ($element.length) {
                        $element.hide();
                        if (typeof item === 'object' && item.additional) {
                            item.additional($element);
                        }
                    }
                });
            }
            
            // Обработка дополнительных настроек
            if (e.name === 'more') {
                moreSettings.forEach(function(item) {
                    var selector = item.selector;
                    var $element = e.body.find(selector);
                    if ($element.length) {
                        $element.hide();
                        if (item.additional) {
                            item.additional($element);
                        }
                    }
                });
            }
            
            // Обработка настроек плеера
            if (e.name === 'player') {
                playerSettings.forEach(function(item) {
                    var selector = item.selector;
                    var $element = e.body.find(selector);
                    if ($element.length) {
                        $element.hide();
                        if (item.additional) {
                            item.additional($element);
                        }
                    }
                });
            }
        });
    }
    

    function hideAllElementsAfterTimeout() {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
        }
        
        hideTimeout = setTimeout(function() {
            allHiddenElements.forEach(function(selector) {
                $(selector).hide();
            });
            Lampa.Noty.show('Элементы снова скрыты');
        }, 90000);
    }
    

    function showHiddenElements() {
        $(document).on('keydown', function(e) {
            if (e.keyCode === keySequence[keyIndex]) {
                keyIndex++;
                if (keyIndex === keySequence.length) {
                    keyIndex = 0;
                    
                    allHiddenElements.forEach(function(selector) {
                        $(selector).show();
                    });
                    
                    Lampa.Noty.show('Алохаморе... элементы отображены!');
                    hideAllElementsAfterTimeout();
                }
            } else {
                keyIndex = 0;
            }
        });
    }
    
    // Добавление кнопки перезагрузки
    function addReloadButton() {        
        var my_reload = `
            <div id="RELOAD" class="head__action selector reload-screen">
                <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="0.48">
                    <path d="M4,12a1,1,0,0,1-2,0A9.983,9.983,0,0,1,18.242,4.206V2.758a1,1,0,1,1,2,0v4a1,1,0,0,1-1,1h-4a1,1,0,0,1,0-2h1.743A7.986,7.986,0,0,0,4,12Zm17-1a1,1,0,0,0-1,1A7.986,7.986,0,0,1,7.015,18.242H8.757a1,1,0,0,0,0-2h-4a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V19.794A9.984,9.984,0,0,0,22,12,1,1,0,0,0,21,11Z" fill="currentColor"></path>
                </svg>
            </div>
        `;

        $('#app > div.head > div > div.head__actions').append(my_reload);

        $('#RELOAD').on('hover:enter hover:click hover:touch', function() {
            location.reload();
        });
    }

    // Инициализация при загрузке приложения
    if (window.appready) {
        hideSettingsComponents();
        hideHeaderElements();
        hideSideMenuSelectors();
        showHiddenElements();
        addReloadButton();
    } else {
        Lampa.Listener.follow('app', function(e) {
            if (e.type === 'ready') {
                hideSettingsComponents();
                hideHeaderElements();
                hideSideMenuSelectors();
                showHiddenElements();
                addReloadButton();
            }
        });
    }
})();