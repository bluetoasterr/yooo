define("ace/theme/tomorrow_night", ["require", "exports", "module", "ace/lib/dom"], function(e, t, n) {
    t.isDark = !0;
    t.cssClass = "ace-tomorrow_night-theme";
    t.cssText = `
      .ace-tomorrow_night-theme .ace_gutter {
        background: transparent;
        color: #f5b862;  
      }
      
      .ace-tomorrow_night-theme .ace_print-margin {
        width: 1px;
        background: transparent;
      }
      
      .ace-tomorrow_night-theme {
        background: url('https://cdn.discordapp.com/attachments/1299941470219931758/1300171709457891471/Skeleton_Trumpet_video.mp4?ex=671fdec3&is=671e8d43&hm=5c77ce62c4162835f65129e8472f564e42db6671aeadce8395f107f88c794c4e&') no-repeat center center fixed;
        background-size: cover;
        color: #f5b862;
        text-shadow: #000000;
        border: #edebeb;
      }
      
      .ace-tomorrow_night-theme .ace_marker-layer {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_selection {
        background-color: #993c3c;
      }
      
      .ace-tomorrow_night-theme.ace_multiselect .ace_selection.ace_start {
        box-shadow: none;
      }
      
      .ace-tomorrow_night-theme .ace_step {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_bracket {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_bracket-start {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_bracket-unmatched {
        margin: -1px 0 0 -1px;
        border: none;
      }
      
      .ace-tomorrow_night-theme .ace_active-line {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_gutter-active-line {
        background-color: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_selected-word {
        border: none;
        background-color: #993c3c;
      }
      
      .ace-tomorrow_night-theme .ace_invisible {
        color: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_keyword,
      .ace-tomorrow_night-theme .ace_meta,
      .ace-tomorrow_night-theme .ace_storage,
      .ace-tomorrow_night-theme .ace_storage.ace_type {
        color: #A3A3A3;
      }
      
      .ace-tomorrow_night-theme .ace_keyword.ace_operator {
        color: #941D1D;
      }
      
      .ace-tomorrow_night-theme .ace_constant.ace_character,
      .ace-tomorrow_night-theme .ace_constant.ace_language,
      .ace-tomorrow_night-theme .ace_constant.ace_numeric,
      .ace-tomorrow_night-theme .ace_keyword.ace_other.ace_unit,
      .ace-tomorrow_night-theme .ace_support.ace_constant,
      .ace-tomorrow_night-theme .ace_variable.ace_parameter {
        color: #f5b862;
      }
      
      .ace-tomorrow_night-theme .ace_constant.ace_other {
        color: #f5b862;
      }
      
      .ace-tomorrow_night-theme .ace_invalid {
        color: #f5b862;
        background-color: transparent;
      }
      .ace-tomorrow_night-theme .ace_invalid.ace_deprecated {
        color: #f5b862;
        background-color: transparent;
      }
      
      .ace-tomorrow_night-theme {
        
      }
    `;
    
    var r = e("../lib/dom");
    r.importCssString(t.cssText, t.cssClass);
  });
  
