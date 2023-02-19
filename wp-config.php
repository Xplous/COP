<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'sor_db' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'aK6V2L/eAx`pCwFEw22ytY&fkHqEmy[5G.(-zAwz1=NW-dy])Yy#p2;~;)W6^H1}' );
define( 'SECURE_AUTH_KEY',  'cPP9CiyxI`:tiJ=ZXx2z{]A<a9RP|>ZXIpYBJ)mT(%~i:NF~b0@%6EF[ig}yo8[f' );
define( 'LOGGED_IN_KEY',    'MtmG}sc;,@f{BG0>~ntqG<efo}jFqD9v8Tem,j#3VX4viiU7oGGC!%-ywHR:DJKK' );
define( 'NONCE_KEY',        'e<Kf<jy63~BT6E<C?%{QPtzuR/&E^Pc7uj#2OW97,2@.^WYVpSi=<G=(zZ]TRQ$<' );
define( 'AUTH_SALT',        'u?j1kT;5#1v1GM?t=mh+<TnO{)%..@`x`mb;a=_i|4VyU:dy]bqZ}}}CSx2Fjz#z' );
define( 'SECURE_AUTH_SALT', '={iL^J]m=CNm-yLQDCeTQU5a6?~bE1M4bU@n.{j+]/GODKy64>&ecYTZ;kq-9OLe' );
define( 'LOGGED_IN_SALT',   'KUKp=tM67D6laxu+@YTFiJl_.>[yF:13I,Wcb8CMVqd M P~jIh|}3J5N|Mx<BhO' );
define( 'NONCE_SALT',       'kdsIL[YFm[`G@eA4:.#a:;oZr>+$*Hgo50lm[=Kv8n#!j(jCY2F44lPLM?V$mhAv' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
