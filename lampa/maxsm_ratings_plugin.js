(function() {
    'use strict';
  
    var star_svg = '<svg viewBox="5 5 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="white" stroke-width="2" d="M32 18.7461L36.2922 27.4159L46.2682 28.6834L38.9675 35.3631L40.7895 44.8469L32 40.2489L23.2105 44.8469L25.0325 35.3631L17.7318 28.6834L27.7078 27.4159L32 18.7461ZM32 23.2539L29.0241 29.2648L22.2682 30.1231L27.2075 34.6424L25.9567 41.1531L32 37.9918L38.0433 41.1531L36.7925 34.6424L41.7318 30.1231L34.9759 29.2648L32 23.2539Z"/><path fill="none" stroke="white" stroke-width="2" d="M32 9C19.2975 9 9 19.2975 9 32C9 44.7025 19.2975 55 32 55C44.7025 55 55 44.7025 55 32C55 19.2975 44.7025 9 32 9ZM7 32C7 18.1929 18.1929 7 32 7C45.8071 7 57 18.1929 57 32C57 45.8071 45.8071 57 32 57C18.1929 57 7 45.8071 7 32Z"/></svg>';
    var avg_svg = '<svg width="64" height="64" viewBox="10 10 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.4517 11.3659C31.8429 10.7366 32.7589 10.7366 33.1501 11.3659L40.2946 22.8568C40.4323 23.0782 40.651 23.2371 40.9041 23.2996L54.0403 26.5435C54.7598 26.7212 55.0428 27.5923 54.5652 28.1589L45.8445 38.5045C45.6764 38.7039 45.5929 38.961 45.6117 39.221L46.5858 52.7168C46.6392 53.4559 45.8982 53.9942 45.2117 53.7151L32.6776 48.6182C32.4361 48.52 32.1657 48.52 31.9242 48.6182L19.39 53.7151C18.7036 53.9942 17.9626 53.4559 18.016 52.7168L18.9901 39.221C19.0089 38.961 18.9253 38.7039 18.7573 38.5045L10.0366 28.1589C9.559 27.5923 9.84204 26.7212 10.5615 26.5435L23.6977 23.2996C23.9508 23.2371 24.1695 23.0782 24.3072 22.8568L31.4517 11.3659Z" fill="#FFDF6D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.6024 10.8379C31.385 9.57926 33.2168 9.57926 33.9994 10.8379L41.1438 22.3288L54.2801 25.5727C55.7189 25.928 56.285 27.6702 55.3298 28.8034L46.6091 39.149L47.5832 52.6448C47.6899 54.123 46.208 55.1997 44.8351 54.6414L32.3009 49.5445L19.7667 54.6414C18.3938 55.1997 16.9118 54.123 17.0185 52.6448L17.9927 39.149L9.272 28.8034C8.3168 27.6702 8.88287 25.928 10.3217 25.5727L23.4579 22.3288L30.6024 10.8379ZM39.4454 23.3848L32.3009 11.8939L25.1564 23.3848C24.8811 23.8276 24.4437 24.1454 23.9374 24.2704L10.8012 27.5144L19.5219 37.86C19.858 38.2587 20.0251 38.7729 19.9875 39.293L19.0134 52.7888L31.5475 47.6919C32.0306 47.4954 32.5712 47.4954 33.0543 47.6919L45.5884 52.7888L44.6143 39.293C44.5767 38.7729 44.7438 38.2587 45.0799 37.86L53.8006 27.5144L40.6643 24.2704C40.1581 24.1454 39.7207 23.8276 39.4454 23.3848Z" fill="black"/></svg>';
    var oscars_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="255" height="255" viewBox="0 0 255 255">  <g transform="translate(77.561474, 0)">    <path      fill="#f0c60b"      d="M 2.2993819,243.56494 C -1.1026591,241.60427 -0.9385111,241.52608 4.2015339,240.00521 L 8.0440949,239.03157 L 8.2617039,226.55609 C 8.2617039,226.55609 11.280223,225.67709 12.312216,225.53163 C 14.427728,225.23345 19.775685,224.14614 24.36752,223.70487 C 28.959355,223.26362 33.61375,223.36451 33.61375,223.36451 C 35.705809,217.55816 35.821325,205.39069 32.708355,191.27168 C 31.382336,185.25747 31.024339,182.15035 31.881607,170.34849 C 32.785302,157.90746 32.369435,156.25117 30.366705,149.83556 C 28.541293,143.98797 27.847485,140.74011 27.857558,129.73289 C 27.864165,122.51234 28.704973,114.4525 29.305577,111.82215 C 30.637862,105.98738 29.322662,102.61956 24.601519,99.776463 C 19.225421,96.538956 17.369413,91.741154 17.621345,81.732632 C 17.78083,75.396835 17.297536,71.093691 15.794836,65.469737 C 13.38634,56.455791 13.82,52.944489 17.616516,50.719769 C 19.063909,49.871611 24.769691,47.179405 30.296033,44.737088 C 37.409114,41.593526 40.624681,39.697365 41.305143,38.245219 C 41.992829,36.77765 42.203737,33.867969 40.57434,28.286206 C 36.592772,14.6467 40.081451,9.2361905 49.839332,9.2361905 C 59.597214,9.2361905 63.429892,14.937624 59.104325,28.286206 C 57.307519,33.831098 57.685835,36.77765 58.373522,38.245219 C 59.053984,39.697365 62.269551,41.593526 69.382633,44.737088 C 74.908976,47.179405 80.614757,49.871611 82.062147,50.719769 C 85.858667,52.944489 86.292317,56.455791 83.883817,65.469737 C 82.381127,71.093691 81.897837,75.396835 82.057317,81.732632 C 82.309247,91.741154 80.453237,96.538956 75.077146,99.776463 C 70.356003,102.61956 69.040803,105.98738 70.37309,111.82215 C 70.973696,114.4525 71.642498,122.36687 71.649112,129.58743 C 71.659183,140.59465 71.13737,143.98797 69.31196,149.83556 C 67.30923,156.25117 66.864688,157.90897 67.797062,170.34849 C 68.684958,182.19476 68.501242,184.26188 66.769075,191.68194 C 64.685501,200.60734 63.581512,219.60387 66.780486,223.03797 C 66.780486,223.03797 70.720195,223.2637 75.311719,223.70493 C 79.903235,224.14616 85.331807,224.95806 87.366447,225.53163 C 88.914437,225.96802 91.244957,226.70155 91.244957,226.70155 L 91.634577,239.03157 L 95.477127,240.00521 C 100.78918,241.52608 101.12532,241.74973 97.379277,243.56494 C 95.489707,244.48057 95.782867,244.4595 95.782867,244.4595 C 95.782867,244.4595 3.1991929,244.08353 2.2993819,243.56494 z"    />  </g></svg>';
    var awards_svg = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve"><path style="fill:#F9AC30;" d="M227.117,383.98h-46.308c-16.987,0-30.758,13.771-30.758,30.758v34.25h211.906v-34.25 c0-16.987-13.771-30.758-30.758-30.758h-46.308H227.117z"></path><path style="fill:#DD8D19;" d="M491.157,70.23c-15.917-24.944-43.818-38.67-78.545-38.67h-0.902H100.3h-0.902 c-34.738,0-62.628,13.725-78.545,38.67c-17.196,26.947-17.636,62.691-1.206,98.089c30.197,65.029,125.456,86.713,129.503,87.604 l9.269,2.045h0.01H353.57h0.01l9.279-2.045c4.037-0.891,99.306-22.575,129.493-87.604C508.783,132.921,508.343,97.177,491.157,70.23 z M463.822,155.066c-12.1,26.056-40.379,43.671-61.978,53.852c-8.912,4.205-17.395,7.497-24.577,9.992l-242.523,0.01h-0.01 c-7.193-2.506-15.675-5.798-24.577-10.003c-21.589-10.181-49.878-27.796-61.978-53.852c-11.817-25.448-12.11-50.203-0.807-67.913 c9.93-15.571,28.415-24.137,52.028-24.137h0.933h311.348h0.933c23.613,0,42.088,8.566,52.028,24.137 C475.933,104.863,475.639,129.618,463.822,155.066z"></path><path style="fill:#F9AC30;" d="M278.024,383.98l-0.047-30.532c-0.034-21.96,11.352-42.511,30.284-53.637 c60.287-35.43,103.444-130.412,103.444-242.04V0H100.297v57.769c0,111.63,43.159,206.615,103.448,242.042 c18.931,11.125,30.317,31.675,30.284,53.633l-0.045,30.535l25.164,26.053L278.024,383.98z"></path><g><path style="fill:#DD8D19;" d="M245.486,353.447l-0.021,30.533h-11.481l0.042-30.533c0.031-21.956-11.356-42.507-30.281-53.632 c-60.29-35.43-103.447-130.415-103.447-242.041V0h81.198v57.774c0,111.626,20.656,206.611,49.501,242.041 C240.055,310.939,245.507,331.49,245.486,353.447z"></path><path style="fill:#DD8D19;" d="M247.916,383.98h-20.797H180.81c-16.987,0-30.758,13.771-30.758,30.758v34.25h67.105v-34.25 C217.157,397.751,230.928,383.98,247.916,383.98z"></path></g><path style="fill:#4F5B5E;" d="M219.114,432.212h-80.945c-9.652,0-17.476,7.824-17.476,17.476v62.314h270.624v-62.314 c0-9.652-7.824-17.476-17.476-17.476h-80.945"></path><path style="fill:#3B4547;" d="M159.138,432.212h-20.97c-9.652,0-17.476,7.824-17.476,17.476v62.314h20.97v-62.314 C141.664,440.036,149.487,432.212,159.138,432.212z"></path></svg>';    
    var tmdb_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="150" height="150">  <defs>    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">      <stop offset="0%" stop-color="#90cea1"/>      <stop offset="56%" stop-color="#3cbec9"/>      <stop offset="100%" stop-color="#00b3e5"/>    </linearGradient>    <style>      .text-style {            font-weight: bold;        fill: url(#grad);        text-anchor: start;        dominant-baseline: middle;        textLength: 150;        lengthAdjust: spacingAndGlyphs;        font-size: 70px;      }    </style>  </defs>  <!-- Верхний ряд TM -->  <text class="text-style" x="0" y="50" textLength="150" lengthAdjust="spacingAndGlyphs">TM</text>  <!-- Нижний ряд DB -->  <text class="text-style" x="0" y="120" textLength="150" lengthAdjust="spacingAndGlyphs">DB</text></svg>';
    var imdb_svg = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.88" style="enable-background:new 0 0 122.88 122.88" xml:space="preserve"><style type="text/css"><![CDATA[	.st0{fill:#F5C518;}]]></style><g><path class="st0" d="M18.43,0h86.02c10.18,0,18.43,8.25,18.43,18.43v86.02c0,10.18-8.25,18.43-18.43,18.43H18.43 C8.25,122.88,0,114.63,0,104.45l0-86.02C0,8.25,8.25,0,18.43,0L18.43,0z"/><path d="M24.96,78.72V44.16h-9.6v34.56H24.96L24.96,78.72z M45.36,44.16L43.2,60.24L42,51.6l-1.2-7.44l-12,0v34.56h8.16v-22.8 l3.36,22.8h6l3.12-23.28v23.28h8.16V44.16H45.36L45.36,44.16z M61.44,78.72V44.16h14.88c3.6,0,6.24,2.64,6.24,6v22.56 c0,3.36-2.64,6-6.24,6H61.44L61.44,78.72z M72.72,50.4l-2.16-0.24v22.56c1.2,0,2.16-0.24,2.4-0.72c0.48-0.48,0.48-1.92,0.48-4.32 V54.24v-2.88L72.72,50.4L72.72,50.4L72.72,50.4z M100.56,52.8h0.72c3.36,0,6.24,2.64,6.24,6v13.92c0,3.36-2.88,6-6.24,6l-0.72,0 c-1.92,0-3.84-0.96-5.04-2.64l-0.48,2.16H86.4V44.16h9.12V55.2C96.72,53.76,98.64,52.8,100.56,52.8L100.56,52.8z M98.64,69.6v-8.16 L98.4,58.8c-0.24-0.48-0.96-0.72-1.44-0.72c-0.48,0-1.2,0.24-1.44,0.72v13.68c0.24,0.48,0.96,0.72,1.44,0.72 c0.48,0,1.44-0.24,1.44-0.72L98.64,69.6L98.64,69.6z"/></g></svg>';
    var kp_svg = '<svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_1_69" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300"><circle cx="150" cy="150" r="150" fill="white"/></mask><g mask="url(#mask0_1_69)"><circle cx="150" cy="150" r="150" fill="black"/><path d="M300 45L145.26 127.827L225.9 45H181.2L126.3 121.203V45H89.9999V255H126.3V178.92L181.2 255H225.9L147.354 174.777L300 255V216L160.776 160.146L300 169.5V130.5L161.658 139.494L300 84V45Z" fill="url(#paint0_radial_1_69)"/></g><defs><radialGradient id="paint0_radial_1_69" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(89.9999 45) rotate(45) scale(296.985)"><stop offset="0.5" stop-color="#FF5500"/><stop offset="1" stop-color="#BBFF00"/></radialGradient></defs></svg>';
    var rt_svg = '<svg id="svg3390" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="141.25" viewBox="0 0 138.75 141.25" width="138.75" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"> <metadata id="metadata3396">  <rdf:RDF>   <cc:Work rdf:about="">    <dc:format>image/svg+xml</dc:format>    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>    <dc:title/>   </cc:Work>  </rdf:RDF> </metadata> <g id="layer1" fill="#f93208">  <path id="path3412" d="m20.154 40.829c-28.149 27.622-13.657 61.011-5.734 71.931 35.254 41.954 92.792 25.339 111.89-5.9071 4.7608-8.2027 22.554-53.467-23.976-78.009z"/>  <path id="path3471" d="m39.613 39.265 4.7778-8.8607 28.406-5.0384 11.119 9.2082z"/> </g> <g id="layer2">  <path id="path3437" d="m39.436 8.5696 8.9682-5.2826 6.7569 15.479c3.7925-6.3226 13.79-16.316 24.939-4.6684-4.7281 1.2636-7.5161 3.8553-7.7397 8.4768 15.145-4.1697 31.343 3.2127 33.539 9.0911-10.951-4.314-27.695 10.377-41.771 2.334 0.009 15.045-12.617 16.636-19.902 17.076 2.077-4.996 5.591-9.994 1.474-14.987-7.618 8.171-13.874 10.668-33.17 4.668 4.876-1.679 14.843-11.39 24.448-11.425-6.775-2.467-12.29-2.087-17.814-1.475 2.917-3.961 12.149-15.197 28.625-8.476z" fill="#02902e"/> </g></svg>';
    var mc_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88"><circle fill="#001B36" stroke="#FC0" stroke-width="4.6" cx="44" cy="44" r="41.6"/><path transform="translate(-10,-961) matrix(1.2756629,-1.3487733,1.3685717,1.2634987,-267.04706,1066.0743)" fill="#FFF"d="m126.73438,92.087002 5.05859,0 0,2.832031 c 1.80989-2.200501 3.96483-3.30076 6.46484-3.300781 1.32811,2.1e-5 2.48045,.273458 3.45703,.820312 .97655,.546895 1.77733,1.373717 2.40235,2.480469 .91144-1.106752 1.89451-1.933574 2.94922-2.480469 1.05466-0.546854 2.18096-0.820291 3.3789-0.820312 1.52341,2.1e-5 2.81247,.309265 3.86719,.927734 1.05466,.618509 1.84242,1.526711 2.36328,2.724609 .37757,.885434 .56637,2.317724 .56641,4.296875 l 0,13.26172-5.48828,0 0-11.85547 c-3e-5-2.057277-0.18883-3.385401-0.56641-3.984375-0.50784-0.781233-1.28909-1.171858-2.34375-1.171875-0.76825,1.7e-5-1.49091,.234392-2.16797,.703125-0.6771,.468766-1.16538,1.155614-1.46484,2.060547-0.2995,.904961-0.44924,2.333998-0.44922,4.287108 l 0,9.96094-5.48828,0 0-11.36719 c-2e-5-2.018214-0.0977-3.320296-0.29297-3.906248-0.19533-0.585922-0.49806-1.02212-0.9082-1.308594-0.41017-0.286442-0.96681-0.429671-1.66993-0.429688-0.84636,1.7e-5-1.60808,.227882-2.28515,.683594-0.6771,.455745-1.16212,1.113297-1.45508,1.972656-0.29298,.859389-0.43946,2.28517-0.43945,4.27734 l 0,10.07813-5.48828,0z"/></svg>';

    
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
        maxsm_ratings_plugin_cc: {
            ru: 'Очистить локальный кеш',
            en: 'Clear local cache',
            uk: 'Очистити локальний кеш',
            be: 'Ачысціць лакальны кэш',
            pt: 'Limpar cache local',
            zh: '清除本地缓存',
            he: 'נקה מטמון מקומי',
            cs: 'Vymazat místní mezipaměť',
            bg: 'Изчистване на локалния кеш'
        },
        maxsm_ratings_plugin_mode: {
            ru: 'Средний рейтинг',
            en: 'Average rating',
            uk: 'Середній рейтинг',
            be: 'Сярэдні рэйтынг',
            pt: 'Classificação média',
            zh: '平均评分',
            he: 'דירוג ממוצע',
            cs: 'Průměrné hodnocení',
            bg: 'Среден рейтинг'
        },
        maxsm_ratings_plugin_mode_normal: {
            ru: 'Показывать средний рейтинг',
            en: 'Show average rating',
            uk: 'Показувати середній рейтинг',
            be: 'Паказваць сярэдні рэйтынг',
            pt: 'Mostrar classificação média',
            zh: '显示平均评分',
            he: 'הצג דירוג ממוצע',
            cs: 'Zobrazit průměrné hodnocení',
            bg: 'Показване на среден рейтинг'
        },
        maxsm_ratings_plugin_mode_simple: {
            ru: 'Только средний рейтинг',
            en: 'Only average rating',
            uk: 'Лише середній рейтинг',
            be: 'Толькі сярэдні рэйтынг',
            pt: 'Apenas classificação média',
            zh: '仅显示平均评分',
            he: 'רק דירוג ממוצע',
            cs: 'Pouze průměrné hodnocení',
            bg: 'Само среден рейтинг'
        },
        maxsm_ratings_plugin_mode_noavg: {
            ru: 'Без среднего рейтинга',
            en: 'No average',
            uk: 'Без середнього рейтингу',
            be: 'Без сярэдняга рэйтынгу',
            pt: 'Sem média',
            zh: '无平均值',
            he: 'ללא ממוצע',
            cs: 'Bez průměru',
            bg: 'Без среден рейтинг'
        }, 
        maxsm_ratings_plugin_icons: {
            ru: 'Значки',
            en: 'Icons',
            uk: 'Значки',
            be: 'Значкі',
            pt: 'Ícones',
            zh: '图标',
            he: 'סמלים',
            cs: 'Ikony',
            bg: 'Икони'
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
        ".rate--icon    { height: 1.8em; }" +
        ".full-start__rate > div:last-child { padding: 0.2em 0.4em; }" +
        "</style>";
    
    Lampa.Template.add('maxsm_ratings_plugin_css', style);
    $('body').append(Lampa.Template.get('maxsm_ratings_plugin_css', {}, true));
        
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
    
    var globalCurrentCard = null;
    
    // Конфигурация
    var logging = true;
    var CACHE_TIME = 3 * 24 * 60 * 60 * 1000; // 3 дня
    var OMDB_CACHE = 'maxsm_ratings_plugin_omdb';
    var KP_CACHE = 'maxsm_ratings_plugin_kp';
    var ID_MAPPING_CACHE = 'maxsm_ratings_plugin_id_mapping';
    var OMDB_API_KEYS = (window.RATINGS_PLUGIN_TOKENS && window.RATINGS_PLUGIN_TOKENS.OMDB_API_KEYS) || ['YOU_KEY'];
    var KP_API_KEYS   = (window.RATINGS_PLUGIN_TOKENS && window.RATINGS_PLUGIN_TOKENS.KP_API_KEYS)   || ['YOU_KEY'];
    var PROXY_TIMEOUT = 5000; // 5 секунд таймаут для каждого прокси
    var PROXY_LIST = [
        'https://api.allorigins.win/raw?url=',  
        'https://open.corsproxy.io/?url=',
        'https://corsproxy.io/?',               
        'https://thingproxy.freeboard.io/fetch/',
        'https://cors.bwa.workers.dev/'
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
    function parseAwards(awardsText, localCurrentCard) {
        if (typeof awardsText !== 'string') return null;
        if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Parse awards: " + awardsText);
    
        var result = {
            oscars: 0,
            awards: 0
        };
    
        var oscarMatch = awardsText.match(/Won (\d+) Oscars?/i);
        if (oscarMatch && oscarMatch[1]) {
            result.oscars = parseInt(oscarMatch[1], 10);
            if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Oscars: " + result.oscars);
        }
    
        var otherMatch = awardsText.match(/Another (\d+) wins?/i);
        if (otherMatch && otherMatch[1]) {
            result.awards = parseInt(otherMatch[1], 10);
            if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Awards (Another): " + result.awards);
        }
    
        if (result.awards === 0) {
            var simpleMatch = awardsText.match(/(\d+) wins?/i);
            if (simpleMatch && simpleMatch[1]) {
                result.awards = parseInt(simpleMatch[1], 10);
                if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Awards (Simple): " + result.awards);
            }
        }
    
        return result;
    }
    
    // Получение данных через прокси, для KP
    function fetchWithProxy(url, localCurrentCard, callback) {
        var currentProxy = 0;
        
        function tryNextProxy() {
            if (currentProxy >= PROXY_LIST.length) {
                callback(new Error('All proxies failed'));
                return;
            }
            
            var proxyUrl = PROXY_LIST[currentProxy] + encodeURIComponent(url);
            if (logging) console.log("MAXSM-RATINGS: Fetch with proxy: " + proxyUrl);
            
            var timeoutId = setTimeout(function() {
                // Если запрос не завершился за PROXY_TIMEOUT, переходим к следующему прокси
                currentProxy++;
                tryNextProxy();
            }, PROXY_TIMEOUT);
            
            fetch(proxyUrl)
                .then(function(response) {
                    clearTimeout(timeoutId); // Отменяем таймаут, если ответ получен
                    if (!response.ok) throw new Error('Proxy error: ' + response.status);
                    return response.text();
                })
                .then(function(data) {
                    clearTimeout(timeoutId); // На всякий случай
                    callback(null, data);
                })
                .catch(function() {
                    clearTimeout(timeoutId);
                    currentProxy++;
                    tryNextProxy();
                });
        }
        
        tryNextProxy();
    }
    
    // Получение данных с КП
    function getKinopoiskRatingByNormalizedCard(normalizedCard, apiKey, localCurrentCard, callback) {
        if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Find information in KP by title and year");
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
            if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Match KP inf");
            for (var j = 0; j < data.films.length; j++) {
                var film2 = data.films[j];
                if (film2.year && String(film2.year).indexOf(String(year)) === 0) {
                    bestMatch = film2;
                    if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " KP best match for: " + queryTitle + " / " + year + " is id: " + bestMatch.filmId  + " / " + film2.nameRu + " / " + film2.nameEn + " / " + film2.year);
                    break;
                }
            }
            
            if (!bestMatch || !bestMatch.filmId) {
                callback(null);
                return;
            }
            
            var xmlUrl = 'https://rating.kinopoisk.ru/' + bestMatch.filmId + '.xml';
            
            fetchWithProxy(xmlUrl, localCurrentCard, function(error, xmlText) {
                if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Try to get KP ratings from XML");
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
                            if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Got KP ratings from XML");
                            return callback({
                                kinopoisk: hasValidKp ? kpRating : null,
                                imdb: hasValidImdb ? imdbRating : null
                            });
                        }
                    } catch (e) {
                        if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " XML parse error, fallback to API");
                    }
                }
                
                // Если XML не сработал, пробуем API
                if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Try to get KP ratings from API");
                fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/' + bestMatch.filmId, {
                    headers: { 'X-API-KEY': apiKey }
                })
                    .then(function(response) {
                        if (!response.ok) throw new Error('API error');
                        return response.json();
                    })
                    .then(function(data) {
                        if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Got KP ratings from API");
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
            console.error("MAXSM-RATINGS: Kinopoisk API request failed");
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

    function removeLoadingAnimation(localCurrentCard) {
        if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Remove loading animation");
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
        
        if (!stillHere(localCurrentCard)) return;        

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
    
    // Проверка в той мы карточке или контента
    function stillHere(localCurrentCard) {
        if (globalCurrentCard !== localCurrentCard) {
                    if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Card changed! SKIP!!!");
                    return false;
                } else {
                    // if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Card ok!");
                    return true;
                }
    }

    // Основная функция
    function fetchAdditionalRatings(card) {
        globalCurrentCard = card.id;
        var localCurrentCard = card.id; 
        
        if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Fetch additional ratings");
        
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
        
        if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " imdb id: " + normalizedCard.imdb_id + " title: " + normalizedCard.title + " orig: " + normalizedCard.original_title + " type: " + normalizedCard.type + " date: " + normalizedCard.release_date);
        
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
            if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Skip KP ratings, allrady in card");
            processNextStep();
            return;
        }
                
        // 1. Обрабатываем кеш Кинопоиска
        if (cachedKpData) {
            ratingsData.kp = cachedKpData.kp;
            ratingsData.imdb_kp = cachedKpData.imdb; 
            if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Get KP ratings from cache");
            processNextStep();
        } else {
            getKinopoiskRatingByNormalizedCard(normalizedCard, getRandomToken(KP_API_KEYS), localCurrentCard, function(kpRatings) {
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

            updateHiddenElements(ratingsData, localCurrentCard);
            // 2. Обрабатываем кеш OMDB
            if (cachedData) {
                ratingsData.rt = cachedData.rt;
                ratingsData.mc = cachedData.mc;
                ratingsData.imdb = cachedData.imdb;
                ratingsData.ageRating = cachedData.ageRating;
                ratingsData.oscars = cachedData.oscars;
                ratingsData.awards = cachedData.awards;
                if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Get OMDB ratings from cache");
                updateUI();
            } else if (normalizedCard.imdb_id) {
                fetchOmdbRatings(normalizedCard, cacheKey, localCurrentCard, function(omdbData) {
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
                        fetchOmdbRatings(normalizedCard, cacheKey, localCurrentCard, function(omdbData) {
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
            insertRatings(ratingsData.rt, ratingsData.mc, ratingsData.oscars, ratingsData.awards, localCurrentCard);
            
            // Обновляем скрытые элементы
            updateHiddenElements(ratingsData, localCurrentCard);
            
            // Считаем и отображаем средний рейтинг
            if (parseInt(localStorage.getItem('maxsm_ratings_plugin_mode'), 10) !== 2)
                calculateAverageRating(localCurrentCard);
            
            //Меняем лейблы на иконки если надо
            var showIcons = localStorage.getItem('maxsm_ratings_plugin_icons')  === 'true';
            if (showIcons) insertIcons(localCurrentCard);
            
            // Убираем анимацию и возвращаем строку рейтингов     
            removeLoadingAnimation(localCurrentCard);
            rateLine.css('visibility', 'visible');
            if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Done");
       }
    }

    //Меняем лейблы на иконки
    function insertIcons(localCurrentCard) {
        if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Insert icons");
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;   
        
        if (!stillHere(localCurrentCard)) return;
        
        function replaceIcon(className, svg) {
            var Element = $('.' + className, render);
            if (Element.length) {
                var sourceNameElement = Element.find('.source--name');
                if (sourceNameElement.length) {
                    sourceNameElement.html(svg).addClass('rate--icon');
                } else {
                    // Если не нашли .source--name, пробуем найти второй дочерний div
                    var childDivs = Element.children('div');
                    if (childDivs.length >= 2) {
                        $(childDivs[1]).html(svg).addClass('rate--icon');
                    }
                }
            }
        }
        
        replaceIcon('rate--imdb', imdb_svg);
        replaceIcon('rate--kp', kp_svg);
        replaceIcon('rate--tmdb', tmdb_svg);
        replaceIcon('rate--oscars', oscars_svg);
        replaceIcon('rate--awards', awards_svg);
        replaceIcon('rate--rt', rt_svg);
        replaceIcon('rate--mc', mc_svg);
        replaceIcon('rate--avg', avg_svg);
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
        
        if (logging) console.log("MAXSM-RATINGS: Save OMDB cache");
        
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
        
        if (logging) console.log("MAXSM-RATINGS: Save KP cache");
    
        var cache = Lampa.Storage.get(KP_CACHE) || {};
    
        cache[key] = {
            kp: data.kp || null,
            imdb: data.imdb || null,
            timestamp: Date.now()
        };
    
        Lampa.Storage.set(KP_CACHE, cache);
    }
    
    function getImdbIdFromTmdb(tmdbId, type, callback) {
        if (logging) console.log("MAXSM-RATINGS: Get IMDb id From TMDB");
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
    function fetchOmdbRatings(card, cacheKey, localCurrentCard, callback) {
        if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Fetch OMDB ratings");
        
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
            if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Skip fetching OMDB for TV show with PG and IMDB ratings");
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
                if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Got OMDB ratings from API");
                var parsedAwards = parseAwards(data.Awards || '', localCurrentCard);
                callback({
                    rt: extractRating(data.Ratings, 'Rotten Tomatoes'),
                    mc: extractRating(data.Ratings, 'Metacritic'),
                    imdb: data.imdbRating || null,
                    ageRating: data.Rated || null,
                    oscars: parsedAwards.oscars,
                    awards: parsedAwards.awards
                });
            } else {
                if (data && data.Response === 'False' && data.Error) {
                    if (logging) console.warn("MAXSM-RATINGS: " + localCurrentCard + " OMDB error: " + data.Error);
                }
                callback(null);
            }
        }, function() {
            if (logging) console.error("MAXSM-RATINGS: " + localCurrentCard + " OMDB request failed");
            callback(null);
        });
    }
    
    function updateHiddenElements(ratings, localCurrentCard) {
        if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Update hidden elements");
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
        
        if (!stillHere(localCurrentCard)) return;
        
        // Обновление возрастного рейтинга с проверкой "Not Rated"
        var pgElement = $('.full-start__pg.hide', render);
        if (pgElement.length && ratings.ageRating) {
            var invalidRatings = ['N/A', 'Not Rated', 'Unrated'];
            var isValid = invalidRatings.indexOf(ratings.ageRating) === -1;
            
            if (isValid) {
                if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Insert PG");
                var localizedRating = AGE_RATINGS[ratings.ageRating] || ratings.ageRating;
                pgElement.removeClass('hide').text(localizedRating);
            }
        }
        
        var imdbElement = $('.rate--imdb.hide', render);
        if (imdbElement.length) {
            var imdbRating; // Объявляем переменную один раз в начале
            if (ratings.imdb && !isNaN(ratings.imdb)) {
                if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Insert IMDB from OMDB");
                imdbRating = parseFloat(ratings.imdb).toFixed(1);
                imdbElement.removeClass('hide').find('> div').eq(0).text(imdbRating);
            }
            else if (ratings.imdb_kp && !isNaN(ratings.imdb_kp)) {
                if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Insert IMDB from KP");
                imdbRating = parseFloat(ratings.imdb_kp).toFixed(1);
                imdbElement.removeClass('hide').find('> div').eq(0).text(imdbRating);
            }
        }
        
        var kpElement = $('.rate--kp.hide', render);
        if (kpElement.length && ratings.kp && !isNaN(ratings.kp)) {
            if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Insert KP");
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
    
    function insertRatings(rtRating, mcRating, oscars, awards, localCurrentCard) {
        if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Insert ratings");
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
    
        var rateLine = $('.full-start-new__rate-line', render);
        if (!rateLine.length) return;
        
        if (!stillHere(localCurrentCard)) return;
    
        var lastRate = $('.full-start__rate:last', rateLine);
        
        var showRT = localStorage.getItem('maxsm_ratings_plugin_tomatoes')  === 'true';
        var showMC = localStorage.getItem('maxsm_ratings_plugin_metacritic')  === 'true';
        var showAwards = localStorage.getItem('maxsm_ratings_plugin_awards') === 'true';
        var showOscar =  localStorage.getItem('maxsm_ratings_plugin_oscars')  === 'true';
        var showColors = localStorage.getItem('maxsm_ratings_plugin_colors')  === 'true';        
        // var showIcons = localStorage.getItem('maxsm_ratings_plugin_icons')  === 'true';
        
        var elemLabel;
        
        if (showRT && rtRating && !isNaN(rtRating) && !$('.rate--rt', rateLine).length) {
            if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Insert Tomatoes");
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
            if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Insert Metacritic");
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

        if (showAwards && awards && !isNaN(awards) && awards > 0 && !$('.rate--awards', rateLine).length) {
            if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Insert Awards");
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
            if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Insert Oscars");
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
    
    function calculateAverageRating(localCurrentCard) {
        if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Calculate avarage rating");
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;
        
        if (!stillHere(localCurrentCard)) return;
    
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
        
        // var simplemode = localStorage.getItem('maxsm_ratings_plugin_mode_simple') === 'true';
        var mode = localStorage.getItem('maxsm_ratings_plugin_mode');
        // if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Mode: " + mode);
        
        if (totalWeight > 0 && (ratingsCount > 1 || (parseInt(localStorage.getItem('maxsm_ratings_plugin_mode'), 10) === 1))) {
            var averageRating = ( weightedSum / totalWeight ).toFixed(1);
            var colorClass = getRatingClass(averageRating);
            
            if (logging) console.log("MAXSM-RATINGS: " + localCurrentCard + " Average rating: " + averageRating);
            
            var avgLabel = Lampa.Lang.translate("maxsm_ratings_plugin_avg");
            
            if (parseInt(localStorage.getItem('maxsm_ratings_plugin_mode'), 10) === 1) {
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
    }
        
    // Инициализация плагина
    function startPlugin() {
        if (logging) console.log("MAXSM-RATINGS: initialized"); 
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
        
        if (!localStorage.getItem('maxsm_ratings_plugin_icons')) {
            localStorage.setItem('maxsm_ratings_plugin_icons', 'true');
        }
    
        if (!localStorage.getItem('maxsm_ratings_plugin_mode')) {
            localStorage.setItem('maxsm_ratings_plugin_mode', '0');
        }
        
        Lampa.SettingsApi.addComponent({
            component: "maxsm_ratings_plugin",
            name: Lampa.Lang.translate("maxsm_ratings_plugin"),
            icon: star_svg
        });

        // Создание объекта для значений выбора режима
        var modeValue = {};
        modeValue[0] = Lampa.Lang.translate("maxsm_ratings_plugin_mode_normal");
        modeValue[1] = Lampa.Lang.translate("maxsm_ratings_plugin_mode_simple");
        modeValue[2] = Lampa.Lang.translate("maxsm_ratings_plugin_mode_noavg");
        
        Lampa.SettingsApi.addParam({
            component: "maxsm_ratings_plugin",
            param: {
                name: "maxsm_ratings_plugin_mode",
                type: 'select',
                values: modeValue,
                default: 0
            },
            field: {
                name: Lampa.Lang.translate("maxsm_ratings_plugin_mode"),
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
        
        Lampa.SettingsApi.addParam({
            component: "maxsm_ratings_plugin",
            param: {
                name: "maxsm_ratings_plugin_icons",
                type: "trigger",
                default: true
            },
            field: {
                name: Lampa.Lang.translate("maxsm_ratings_plugin_icons"),
                description: ''
            },
            onChange: function(value) {
            }
        });
        
        Lampa.SettingsApi.addParam({
            component: 'maxsm_ratings_plugin',
            param: {
                name: 'maxsm_ratings_plugin_cc',
                type: 'button'
            },
            field: {
                name: Lampa.Lang.translate('maxsm_ratings_plugin_cc')
            },
            onChange: function() {
                localStorage.removeItem(OMDB_CACHE);
                localStorage.removeItem(KP_CACHE);
                window.location.reload();
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