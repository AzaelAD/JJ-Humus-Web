var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "400", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    state_description: "",
    state_color: "#88A4BC",
    state_hover_color: "#88A4BC",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    MXAGU: {
      name: "Aguascalientes",
      color: "#cccccc"
    },
    MXBCN: {
      name: "Baja California",
      color: "#92cd29",
      hover_color: "#6a971a"
    },
    MXBCS: {
      name: "Baja California Sur",
      color: "#cccccc"
    },
    MXCAM: {
      name: "Campeche",
      color: "#cccccc"
    },
    MXCHH: {
      name: "Chihuahua",
      color: "#cccccc"
    },
    MXCHP: {
      name: "Chiapas",
      color: "#cccccc"
    },
    MXCMX: {
      name: "Ciudad de México",
      color: "#cccccc"
    },
    MXCOA: {
      name: "Coahuila",
      color: "#cccccc"
    },
    MXCOL: {
      name: "Colima",
      color: "#cccccc"
    },
    MXDUR: {
      name: "Durango",
      color: "#cccccc"
    },
    MXGRO: {
      name: "Guerrero",
      color: "#cccccc"
    },
    MXGUA: {
      name: "Guanajuato",
      color: "#92cd29",
      hover_color: "#6a971a"
    },
    MXHID: {
      name: "Hidalgo",
      color: "#92cd29",
      hover_color: "#6a971a"
    },
    MXJAL: {
      name: "Jalisco",
      color: "#92cd29",
      hover_color: "#6a971a"
    },
    MXMEX: {
      name: "México",
      color: "#92cd29",
      hover_color: "#6a971a"
    },
    MXMIC: {
      name: "Michoacán",
      color: "#92cd29",
      hover_color: "#6a971a"
    },
    MXMOR: {
      name: "Morelos",
      color: "#cccccc"
    },
    MXNAY: {
      name: "Nayarit",
      color: "#92cd29",
      hover_color: "#6a971a",
      description: "Sin Referencia, 63173 Tepic, Nay., México"
    },
    MXNLE: {
      name: "Nuevo León",
      color: "#cccccc"
    },
    MXOAX: {
      name: "Oaxaca",
      color: "#cccccc"
    },
    MXPUE: {
      name: "Puebla",
      color: "#92cd29",
      hover_color: "#6a971a"
    },
    MXQUE: {
      name: "Querétaro",
      color: "#cccccc"
    },
    MXROO: {
      name: "Quintana Roo",
      color: "#cccccc"
    },
    MXSIN: {
      name: "Sinaloa",
      color: "#92cd29",
      hover_color: "#6a971a"
    },
    MXSLP: {
      name: "San Luis Potosí",
      color: "#cccccc"
    },
    MXSON: {
      name: "Sonora",
      color: "#92cd29",
      hover_color: "#6a971a",
      image_url: "https://i.ytimg.com/vi/E35YTQ_AUy8/maxresdefault.jpg"
    },
    MXTAB: {
      name: "Tabasco",
      color: "#cccccc"
    },
    MXTAM: {
      name: "Tamaulipas",
      color: "#92cd29",
      hover_color: "#6a971a"
    },
    MXTLA: {
      name: "Tlaxcala",
      color: "#cccccc"
    },
    MXVER: {
      name: "Veracruz",
      color: "#92cd29",
      hover_color: "#6a971a"
    },
    MXYUC: {
      name: "Yucatán",
      color: "#cccccc"
    },
    MXZAC: {
      name: "Zacatecas",
      color: "#cccccc"
    }
  },
  locations: {},
  labels: {
    MXAGU: {
      name: "Aguascalientes",
      parent_id: "MXAGU"
    },
    MXBCN: {
      name: "Baja California",
      parent_id: "MXBCN"
    },
    MXBCS: {
      name: "Baja California Sur",
      parent_id: "MXBCS"
    },
    MXCAM: {
      name: "Campeche",
      parent_id: "MXCAM"
    },
    MXCHH: {
      name: "Chihuahua",
      parent_id: "MXCHH"
    },
    MXCHP: {
      name: "Chiapas",
      parent_id: "MXCHP"
    },
    MXCMX: {
      name: "Ciudad de México",
      parent_id: "MXCMX"
    },
    MXCOA: {
      name: "Coahuila",
      parent_id: "MXCOA"
    },
    MXCOL: {
      name: "Colima",
      parent_id: "MXCOL"
    },
    MXDUR: {
      name: "Durango",
      parent_id: "MXDUR"
    },
    MXGRO: {
      name: "Guerrero",
      parent_id: "MXGRO"
    },
    MXGUA: {
      name: "Guanajuato",
      parent_id: "MXGUA"
    },
    MXHID: {
      name: "Hidalgo",
      parent_id: "MXHID"
    },
    MXJAL: {
      name: "Jalisco",
      parent_id: "MXJAL"
    },
    MXMEX: {
      name: "México",
      parent_id: "MXMEX"
    },
    MXMIC: {
      name: "Michoacán",
      parent_id: "MXMIC"
    },
    MXMOR: {
      name: "Morelos",
      parent_id: "MXMOR"
    },
    MXNAY: {
      name: "Nayarit",
      parent_id: "MXNAY"
    },
    MXNLE: {
      name: "Nuevo León",
      parent_id: "MXNLE"
    },
    MXOAX: {
      name: "Oaxaca",
      parent_id: "MXOAX"
    },
    MXPUE: {
      name: "Puebla",
      parent_id: "MXPUE"
    },
    MXQUE: {
      name: "Querétaro",
      parent_id: "MXQUE"
    },
    MXROO: {
      name: "Quintana Roo",
      parent_id: "MXROO"
    },
    MXSIN: {
      name: "Sinaloa",
      parent_id: "MXSIN"
    },
    MXSLP: {
      name: "San Luis Potosí",
      parent_id: "MXSLP"
    },
    MXSON: {
      name: "Sonora",
      parent_id: "MXSON"
    },
    MXTAB: {
      name: "Tabasco",
      parent_id: "MXTAB"
    },
    MXTAM: {
      name: "Tamaulipas",
      parent_id: "MXTAM"
    },
    MXTLA: {
      name: "Tlaxcala",
      parent_id: "MXTLA"
    },
    MXVER: {
      name: "Veracruz",
      parent_id: "MXVER"
    },
    MXYUC: {
      name: "Yucatán",
      parent_id: "MXYUC"
    },
    MXZAC: {
      name: "Zacatecas",
      parent_id: "MXZAC"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};