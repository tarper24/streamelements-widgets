let socials = {};
let orders = {};
let socialList = [];
let options = {
    "": "Nothing"
};

function makeSocial(tag, name, color = null, icon = null) {
    socials[`${tag}Handle`] = {
        "group": name,
        "type": "text",
        "label": "Username",
        "value": `My${name}`
    };
    if (color != null) {
        socials[`${tag}BrandColor`] = {
            "group": name,
            "type": "hidden",
            "value": color
        };
    }
    socials[`${tag}Icon`] = {
        "group": name,
        "type": "hidden",
        "value": icon ?? tag
    };

    socialList.push(tag)
    options[tag] = name;
};

function compile() {
    makeOrder()

    return {
        "socials": socialList,
        ...socials,
        ...orders
    }
}


function makeOrder() {
    var order = {}
    for (let i = 0; i < socialList.length; i++) {
        order[`order${i + 1}`] = {
            "group": "Order",
            "type": "dropdown",
            "label": getOrdinal(i + 1),
            "value": socialList[i],
            "options": options
        };
    }
    orders = order;
};

var getOrdinal = function (n) {
    var s = ["th", "st", "nd", "rd"],
        v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

makeSocial('twitter', 'Twitter', '#1da1f2');
makeSocial('youtube', 'YouTube', '#ff0000');
makeSocial('twitch', 'Twitch', '#6441a5');
makeSocial('discord', 'Discord', '#7289DA');
makeSocial('guilded', 'Guilded', '#F5C400');
makeSocial('instagram', 'Instagram');
makeSocial('facebook', 'Facebook', '#1877F2');
makeSocial('tiktok', 'TikTok');
makeSocial('reddit', 'Reddit', '#FF4500');
makeSocial('patreon', 'Patreon', '#FF424D');
makeSocial('deviantart', 'DeviantArt', '#00E59B');
makeSocial('pixiv', 'Pixiv', '#0097FA', 'palette');
makeSocial('artstation', 'ArtStation', '#13AFF0');
makeSocial('tumblr', 'Tumblr', '#001935');
makeSocial('github', 'GitHub');
makeSocial('gitlab', 'GitLab', '#E24329');
makeSocial('pinterest', 'Pinterest', 'E6001C');
makeSocial('paypal', 'PayPal', '#002F86');
makeSocial('snapchat', 'Snapchat', '#FFFC00');
makeSocial('telegram', 'Telegram', '#25A3E2');
makeSocial('whatsapp', 'WhatsApp', '#59CE72');
makeSocial('furaffinity', 'Fur Affinity', null, 'paw');
makeSocial('custom1', 'Custom 1')
makeSocial('custom2', 'Custom 2')
makeSocial('custom3', 'Custom 3')

result = compile();
copy(result);

let s = {
    "socials": [
        "twitter",
        "youtube",
        "twitch",
        "discord",
        "guilded",
        "instagram",
        "facebook",
        "tiktok",
        "reddit",
        "patreon",
        "deviantart",
        "pixiv",
        "artstation",
        "tumblr",
        "github",
        "gitlab",
        "pinterest",
        "paypal",
        "snapchat",
        "telegram",
        "whatsapp",
        "furaffinity",
        "custom1",
        "custom2",
        "custom3"
    ],
    "twitterHandle": {
        "group": "Twitter",
        "type": "text",
        "label": "Username",
        "value": "MyTwitter"
    },
    "twitterBrandColor": {
        "group": "Twitter",
        "type": "hidden",
        "value": "#1da1f2"
    },
    "twitterIcon": {
        "group": "Twitter",
        "type": "hidden",
        "value": "twitter"
    },
    "youtubeHandle": {
        "group": "YouTube",
        "type": "text",
        "label": "Username",
        "value": "MyYouTube"
    },
    "youtubeBrandColor": {
        "group": "YouTube",
        "type": "hidden",
        "value": "#ff0000"
    },
    "youtubeIcon": {
        "group": "YouTube",
        "type": "hidden",
        "value": "youtube"
    },
    "twitchHandle": {
        "group": "Twitch",
        "type": "text",
        "label": "Username",
        "value": "MyTwitch"
    },
    "twitchBrandColor": {
        "group": "Twitch",
        "type": "hidden",
        "value": "#6441a5"
    },
    "twitchIcon": {
        "group": "Twitch",
        "type": "hidden",
        "value": "twitch"
    },
    "discordHandle": {
        "group": "Discord",
        "type": "text",
        "label": "Username",
        "value": "MyDiscord"
    },
    "discordBrandColor": {
        "group": "Discord",
        "type": "hidden",
        "value": "#7289DA"
    },
    "discordIcon": {
        "group": "Discord",
        "type": "hidden",
        "value": "discord"
    },
    "guildedHandle": {
        "group": "Guilded",
        "type": "text",
        "label": "Username",
        "value": "MyGuilded"
    },
    "guildedBrandColor": {
        "group": "Guilded",
        "type": "hidden",
        "value": "#F5C400"
    },
    "guildedIcon": {
        "group": "Guilded",
        "type": "hidden",
        "value": "guilded"
    },
    "instagramHandle": {
        "group": "Instagram",
        "type": "text",
        "label": "Username",
        "value": "MyInstagram"
    },
    "instagramIcon": {
        "group": "Instagram",
        "type": "hidden",
        "value": "instagram"
    },
    "facebookHandle": {
        "group": "Facebook",
        "type": "text",
        "label": "Username",
        "value": "MyFacebook"
    },
    "facebookBrandColor": {
        "group": "Facebook",
        "type": "hidden",
        "value": "#1877F2"
    },
    "facebookIcon": {
        "group": "Facebook",
        "type": "hidden",
        "value": "facebook"
    },
    "tiktokHandle": {
        "group": "TikTok",
        "type": "text",
        "label": "Username",
        "value": "MyTikTok"
    },
    "tiktokIcon": {
        "group": "TikTok",
        "type": "hidden",
        "value": "tiktok"
    },
    "redditHandle": {
        "group": "Reddit",
        "type": "text",
        "label": "Username",
        "value": "MyReddit"
    },
    "redditBrandColor": {
        "group": "Reddit",
        "type": "hidden",
        "value": "#FF4500"
    },
    "redditIcon": {
        "group": "Reddit",
        "type": "hidden",
        "value": "reddit"
    },
    "patreonHandle": {
        "group": "Patreon",
        "type": "text",
        "label": "Username",
        "value": "MyPatreon"
    },
    "patreonBrandColor": {
        "group": "Patreon",
        "type": "hidden",
        "value": "#FF424D"
    },
    "patreonIcon": {
        "group": "Patreon",
        "type": "hidden",
        "value": "patreon"
    },
    "deviantartHandle": {
        "group": "DeviantArt",
        "type": "text",
        "label": "Username",
        "value": "MyDeviantArt"
    },
    "deviantartBrandColor": {
        "group": "DeviantArt",
        "type": "hidden",
        "value": "#00E59B"
    },
    "deviantartIcon": {
        "group": "DeviantArt",
        "type": "hidden",
        "value": "deviantart"
    },
    "pixivHandle": {
        "group": "Pixiv",
        "type": "text",
        "label": "Username",
        "value": "MyPixiv"
    },
    "pixivBrandColor": {
        "group": "Pixiv",
        "type": "hidden",
        "value": "#0097FA"
    },
    "pixivIcon": {
        "group": "Pixiv",
        "type": "hidden",
        "value": "palette"
    },
    "artstationHandle": {
        "group": "ArtStation",
        "type": "text",
        "label": "Username",
        "value": "MyArtStation"
    },
    "artstationBrandColor": {
        "group": "ArtStation",
        "type": "hidden",
        "value": "#13AFF0"
    },
    "artstationIcon": {
        "group": "ArtStation",
        "type": "hidden",
        "value": "artstation"
    },
    "tumblrHandle": {
        "group": "Tumblr",
        "type": "text",
        "label": "Username",
        "value": "MyTumblr"
    },
    "tumblrBrandColor": {
        "group": "Tumblr",
        "type": "hidden",
        "value": "#001935"
    },
    "tumblrIcon": {
        "group": "Tumblr",
        "type": "hidden",
        "value": "tumblr"
    },
    "githubHandle": {
        "group": "GitHub",
        "type": "text",
        "label": "Username",
        "value": "MyGitHub"
    },
    "githubIcon": {
        "group": "GitHub",
        "type": "hidden",
        "value": "github"
    },
    "gitlabHandle": {
        "group": "GitLab",
        "type": "text",
        "label": "Username",
        "value": "MyGitLab"
    },
    "gitlabBrandColor": {
        "group": "GitLab",
        "type": "hidden",
        "value": "#E24329"
    },
    "gitlabIcon": {
        "group": "GitLab",
        "type": "hidden",
        "value": "gitlab"
    },
    "pinterestHandle": {
        "group": "Pinterest",
        "type": "text",
        "label": "Username",
        "value": "MyPinterest"
    },
    "pinterestBrandColor": {
        "group": "Pinterest",
        "type": "hidden",
        "value": "E6001C"
    },
    "pinterestIcon": {
        "group": "Pinterest",
        "type": "hidden",
        "value": "pinterest"
    },
    "paypalHandle": {
        "group": "PayPal",
        "type": "text",
        "label": "Username",
        "value": "MyPayPal"
    },
    "paypalBrandColor": {
        "group": "PayPal",
        "type": "hidden",
        "value": "#002F86"
    },
    "paypalIcon": {
        "group": "PayPal",
        "type": "hidden",
        "value": "paypal"
    },
    "snapchatHandle": {
        "group": "Snapchat",
        "type": "text",
        "label": "Username",
        "value": "MySnapchat"
    },
    "snapchatBrandColor": {
        "group": "Snapchat",
        "type": "hidden",
        "value": "#FFFC00"
    },
    "snapchatIcon": {
        "group": "Snapchat",
        "type": "hidden",
        "value": "snapchat"
    },
    "telegramHandle": {
        "group": "Telegram",
        "type": "text",
        "label": "Username",
        "value": "MyTelegram"
    },
    "telegramBrandColor": {
        "group": "Telegram",
        "type": "hidden",
        "value": "#25A3E2"
    },
    "telegramIcon": {
        "group": "Telegram",
        "type": "hidden",
        "value": "telegram"
    },
    "whatsappHandle": {
        "group": "WhatsApp",
        "type": "text",
        "label": "Username",
        "value": "MyWhatsApp"
    },
    "whatsappBrandColor": {
        "group": "WhatsApp",
        "type": "hidden",
        "value": "#59CE72"
    },
    "whatsappIcon": {
        "group": "WhatsApp",
        "type": "hidden",
        "value": "whatsapp"
    },
    "furaffinityHandle": {
        "group": "Fur Affinity",
        "type": "text",
        "label": "Username",
        "value": "MyFur Affinity"
    },
    "furaffinityIcon": {
        "group": "Fur Affinity",
        "type": "hidden",
        "value": "paw"
    },
    "custom1Handle": {
        "group": "Custom 1",
        "type": "text",
        "label": "Username",
        "value": "MyCustom 1"
    },
    "custom1Icon": {
        "group": "Custom 1",
        "type": "hidden",
        "value": "custom1"
    },
    "custom2Handle": {
        "group": "Custom 2",
        "type": "text",
        "label": "Username",
        "value": "MyCustom 2"
    },
    "custom2Icon": {
        "group": "Custom 2",
        "type": "hidden",
        "value": "custom2"
    },
    "custom3Handle": {
        "group": "Custom 3",
        "type": "text",
        "label": "Username",
        "value": "MyCustom 3"
    },
    "custom3Icon": {
        "group": "Custom 3",
        "type": "hidden",
        "value": "custom3"
    },
    "order1": {
        "group": "Order",
        "type": "dropdown",
        "label": "1st",
        "value": "twitter",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order2": {
        "group": "Order",
        "type": "dropdown",
        "label": "2nd",
        "value": "youtube",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order3": {
        "group": "Order",
        "type": "dropdown",
        "label": "3rd",
        "value": "twitch",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order4": {
        "group": "Order",
        "type": "dropdown",
        "label": "4th",
        "value": "discord",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order5": {
        "group": "Order",
        "type": "dropdown",
        "label": "5th",
        "value": "guilded",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order6": {
        "group": "Order",
        "type": "dropdown",
        "label": "6th",
        "value": "instagram",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order7": {
        "group": "Order",
        "type": "dropdown",
        "label": "7th",
        "value": "facebook",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order8": {
        "group": "Order",
        "type": "dropdown",
        "label": "8th",
        "value": "tiktok",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order9": {
        "group": "Order",
        "type": "dropdown",
        "label": "9th",
        "value": "reddit",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order10": {
        "group": "Order",
        "type": "dropdown",
        "label": "10th",
        "value": "patreon",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order11": {
        "group": "Order",
        "type": "dropdown",
        "label": "11th",
        "value": "deviantart",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order12": {
        "group": "Order",
        "type": "dropdown",
        "label": "12th",
        "value": "pixiv",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order13": {
        "group": "Order",
        "type": "dropdown",
        "label": "13th",
        "value": "artstation",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order14": {
        "group": "Order",
        "type": "dropdown",
        "label": "14th",
        "value": "tumblr",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order15": {
        "group": "Order",
        "type": "dropdown",
        "label": "15th",
        "value": "github",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order16": {
        "group": "Order",
        "type": "dropdown",
        "label": "16th",
        "value": "gitlab",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order17": {
        "group": "Order",
        "type": "dropdown",
        "label": "17th",
        "value": "pinterest",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order18": {
        "group": "Order",
        "type": "dropdown",
        "label": "18th",
        "value": "paypal",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order19": {
        "group": "Order",
        "type": "dropdown",
        "label": "19th",
        "value": "snapchat",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order20": {
        "group": "Order",
        "type": "dropdown",
        "label": "20th",
        "value": "telegram",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order21": {
        "group": "Order",
        "type": "dropdown",
        "label": "21st",
        "value": "whatsapp",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order22": {
        "group": "Order",
        "type": "dropdown",
        "label": "22nd",
        "value": "furaffinity",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order23": {
        "group": "Order",
        "type": "dropdown",
        "label": "23rd",
        "value": "custom1",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order24": {
        "group": "Order",
        "type": "dropdown",
        "label": "24th",
        "value": "custom2",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    },
    "order25": {
        "group": "Order",
        "type": "dropdown",
        "label": "25th",
        "value": "custom3",
        "options": {
            "": "Nothing",
            "twitter": "Twitter",
            "youtube": "YouTube",
            "twitch": "Twitch",
            "discord": "Discord",
            "guilded": "Guilded",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "tiktok": "TikTok",
            "reddit": "Reddit",
            "patreon": "Patreon",
            "deviantart": "DeviantArt",
            "pixiv": "Pixiv",
            "artstation": "ArtStation",
            "tumblr": "Tumblr",
            "github": "GitHub",
            "gitlab": "GitLab",
            "pinterest": "Pinterest",
            "paypal": "PayPal",
            "snapchat": "Snapchat",
            "telegram": "Telegram",
            "whatsapp": "WhatsApp",
            "furaffinity": "Fur Affinity",
            "custom1": "Custom 1",
            "custom2": "Custom 2",
            "custom3": "Custom 3"
        }
    }
}