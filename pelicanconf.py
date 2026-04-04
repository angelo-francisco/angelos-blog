# AUTHOR = "Ângelo Francisco"
SITENAME = "Ângelo's Blog"
SITEURL = "https://angelo-francisco.github.io/angelos-blog"

PATH = "content"

TIMEZONE = "Africa/Luanda"

DEFAULT_LANG = "en"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

LINKS = (("Home", "/"),)

SOCIAL = (
    ("Github", "https://github.com/angelo-francisco/"),
    ("LinkedIn", "https://getpelican.com/"),
)

DEFAULT_PAGINATION = 10

STATIC_PATHS = [
    "images",
    "extra",
]

EXTRA_PATH_METADATA = {
    "extra/favicon.ico": {"path": "favicon.ico"},
}
