define("ace/theme/tomorrow_night", ["require", "exports", "module", "ace/lib/dom"], function(e, t, n) {
    t.isDark = !0;
    t.cssClass = "ace-tomorrow_night-theme";
    t.cssText = `
      .ace-tomorrow_night-theme .ace_gutter {
        background: transparent;
        color: #E2DE16;  
      }
      
      .ace-tomorrow_night-theme .ace_print-margin {
        width: 1px;
        background: transparent;
      }
      
      .ace-tomorrow_night-theme {
        background: url('https://r2.e-z.host/10380163-210a-467a-bdab-6570f0bfa576/58i19cyx.mp4') no-repeat center center fixed;
        background-size: cover;
        color: #E2DE16;
        text-shadow: #000000;
        border: #edebeb;
      }
      
      .ace-tomorrow_night-theme .ace_marker-layer {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_selection {
        background-color: #14791B;
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
        background-color: #14791B;
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
        color: #E2DE16;
      }
      
      .ace-tomorrow_night-theme .ace_constant.ace_other {
        color: #E2DE16;
      }
      
      .ace-tomorrow_night-theme .ace_invalid {
        color: #E2DE16;
        background-color: transparent;
      }
      .ace-tomorrow_night-theme .ace_invalid.ace_deprecated {
        color: #E2DE16;
        background-color: transparent;
      }
      
      .ace-tomorrow_night-theme {
        
      }
    `;
    
    var r = e("../lib/dom");
    r.importCssString(t.cssText, t.cssClass);
  });
  
