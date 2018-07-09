/**
 * JSON_ARRAY to contain show_name and show_url for each show
 */
var shows = [
    {
        show_name: "not",
        show_url: "sas",
        img_url : "../static/img/not-available.jpg"
    },
    {
        show_name: "dr3",
        show_url: "sas",
        img_url : "../static/img/dragon3.jpeg"
    },
    {
        show_name: "tr2",
        show_url: "sas",
        img_url : "../static/img/Trolls2.jpg"
    }
];

/**
 * Media Config URL
 * @type {string}
 */
const MEDIA_CONFIG_URL = 'http://web.studio.dreamworks.com/services/prod/studio/pam/config/1/serve/media/media_config/';

/**
 * ConfigSet key in Media_Config
 * @type {string}
 */
const MEDIA_CONFIG_SETS =  "config_sets";

/**
 * Key in show under ConfigSet
 * @type {string}
 */
const MEDIA_MANAGER_URL =  "media_manager_url";

/**
 * Image when show image does not exist
 * @type {string}
 */
const IMAGE_NOT_AVAILABLE_PATH = "static/img/not.jpg";

/**
 *  fetchShows called on page load and provides all the show names on landing page
 *  On selecting the show, webpage redirects user to specific show media page
 */
function fetchShows() {
    /**
     * Fetch API to fetch show details using URL
     * */
    fetch(MEDIA_CONFIG_URL).then(function(response){
        if(response.status===200){
            response.json().then(function (data) {
                for(var show in data[MEDIA_CONFIG_SETS]){
                    try {
                        show_config = data[MEDIA_CONFIG_SETS][show];
                        if(show_config.status==="ACTIVE"){
                            var sh_url = show_config[MEDIA_MANAGER_URL];
                            if(sh_url) {
                                var show_data = {
                                    show_name: show,
                                    show_url: sh_url
                                };
                                shows.push(show_data)
                            }
                        }
                    }
                    catch (e){
                        if(!e instanceof TypeError){
                            console.log(show, e);
                        }
                    }
                }
                generateShowsGridView();
            })
        }
    }).catch(function (err) {
        console.log(err);
    });
}


/**
 * Generates Gridview of shows media manager contains
 */
function generateShowsGridView(){
    shows.sort(function (a, b) {
        if(a.show_name.toLowerCase() < b.show_name.toLowerCase()){
            return -1
        }
        else if(a.show_name.toLowerCase() > b.show_name.toLowerCase()){
            return 1;
        }
        return 0;
    });
    var shows_div = document.getElementById("shows_div");
    for(var i=0; i<shows.length; i++){
        var box_div = document.createElement("a");
        box_div.className = "box";
        box_div.href = shows[i].show_url;
        addShowElementOnPage(box_div, shows[i]);
        shows_div.append(box_div);
    }
}


/**
 * Appends temp div in gridview under parent div a on landing page
 * @param div Passes parent div
 * @param show_data
 */
function addShowElementOnPage(div, show_data){
    var img = document.createElement("img");
    if(show_data.hasOwnProperty("img_url") && show_data.img_url && show_data.img_url.trim() !== ""){
        img.src = show_data.img_url;
    }
    else {
        img.src = IMAGE_NOT_AVAILABLE_PATH;
    }

    var box_label_div = document.createElement("div");
    box_label_div.className = "box_label";
    box_label_div.innerHTML = "<h3>"+ show_data.show_name + "</h3>";

    div.append(img);
    div.append(box_label_div);

    return div;
}