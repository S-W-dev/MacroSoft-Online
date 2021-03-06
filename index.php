<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

require "../htdocs/header.php";

?>
<!DOCTYPE html5>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <!-- splitjs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/split.js/1.3.5/split.min.js"></script>

    <!-- font awesome -->
    <script src="https://kit.fontawesome.com/992f70584c.js" crossorigin="anonymous"></script>

    <!-- stylesheets -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/styles-large.css">
    <link rel="stylesheet" href="css/settings-popup.css">

    <!-- fix this later -->
    <!-- <link rel="stylesheet" media="screen and (min-width: 1700px)" href="/styles-large.css"> -->
    <!-- <link rel="stylesheet" media="screen and (max-width: 1700px)" href="/styles-medium.css"> -->
    <!-- <link rel="stylesheet" media="screen and (max-width: 1300px)" href="/styles-small.css"> -->

    <!-- codemirror stuff -->

    <link rel="stylesheet" href="addon/dialog/dialog.css">
    <link rel="stylesheet" href="addon/scroll/simplescrollbars.css">
    <link rel="stylesheet" href="addon/fold/foldgutter.css">
    <link rel="stylesheet" href="addon/search/matchesonscrollbar.css">

    <script src="lib/codemirror.js"></script>
    <link rel="stylesheet" href="lib/codemirror.css">
    <script src="mode/clike/clike.js"></script>
    <script src="addon/dialog/dialog.js"></script>
    <script src="addon/display/panel.js"></script>
    <script src="addon/display/placeholder.js"></script>
    <script src="addon/display/rulers.js"></script>
    <script src="addon/scroll/scrollpastend.js"></script>
    <script src="addon/edit/closetag.js"></script>
    <script src="addon/edit/matchbrackets.js"></script>
    <script src="addon/scroll/simplescrollbars.js"></script>
    <script src="addon/scroll/annotatescrollbar.js"></script>
    <script src="addon/fold/foldcode.js"></script>
    <script src="addon/fold/foldgutter.js"></script>
    <script src="addon/fold/indent-fold.js"></script>
    <script src="addon/fold/comment-fold.js"></script>
    <script src="addon/fold/brace-fold.js"></script>
    <script src="addon/search/search.js"></script>
    <script src="addon/search/jump-to-line.js"></script>
    <script src="addon/search/searchcursor.js"></script>
    <script src="addon/search/matchesonscrollbar.js"></script>
    <script src="addon/comment/comment.js"></script>
    <script src="addon/comment/continuecomment.js"></script>
    <script src="keymap/sublime.js"></script>

    <!-- blockly -->
    <link rel="stylesheet" href="blockly/blockly.css">
    <script src="https://unpkg.com/blockly/blockly.min.js"></script>
    <script src="blockly/blockly.js" defer></script>

    <!-- market -->
    <link rel="stylesheet" href="css/market.css">
    <script src="js/market.js"></script>

    <!-- scripts -->

    <script src="js/codemirror-editors.js" defer></script>

    <script src="js/globals.js" defer></script>

    <script src="js/themes.js" defer></script>

    <script src="js/compiler.js"></script>

    <script src="js/layout.js" defer></script>
    <script src="js/main.js" defer></script>
    <script src="js/settings-popup.js" defer></script>
    <script src="js/save-code.js" defer></script>

    <script src="js/handlers.js" defer></script>

    <title>MacroPad Editor</title>
</head>
<body>
    <main class="">
        <section class="glass">
            <div id="" class="dashboard">
                <div class="logo">
                    <img src="images/CGLogo.png" class="logo-img" id="CG"alt="Logo">
                    <h3>MacroPad Editor</h3>
                    <hr>
                    <h2>Buttons</h2>
                </div>
                <div id="buttons" class="buttons scrollbar-hidden">
                    <div id="1" class="button">
                        <img src="images/Key1.png" alt="">
                        <h2>Button 1</h2>
                        <img src="images/asterick.png" class="unsaved-icon" alt="images/asterick">
                    </div>
                    <div id="2" class="button">
                        <img src="images/Key2.png" alt="">
                        <h2>Button 2</h2>
                        <img src="images/asterick.png" class="unsaved-icon" alt="images/asterick">
                    </div>
                    <div id="3" class="button">
                        <img src="images/Key3.png" alt="">
                        <h2>Button 3</h2>
                        <img src="images/asterick.png" class="unsaved-icon" alt="images/asterick">
                    </div>
                    <div id="4" class="button">
                        <img src="images/Key4.png" alt="">
                        <h2>Button 4</h2>
                        <img src="images/asterick.png" class="unsaved-icon" alt="images/asterick">
                    </div>
                    <div id="5" class="button">
                        <img src="images/Key5.png" alt="">
                        <h2>Button 5</h2>
                        <img src="images/asterick.png" class="unsaved-icon" alt="images/asterick">
                    </div>
                    <div id="6" class="button">
                        <img src="images/Key6.png" alt="">
                        <h2>Button 6</h2>
                        <img src="images/asterick.png" class="unsaved-icon" alt="images/asterick">
                    </div>
                    <div id="7" class="button">
                        <img src="images/Key7.png" alt="">
                        <h2>Button 7</h2>
                        <img src="images/asterick.png" class="unsaved-icon" alt="images/asterick">
                    </div>
                    <div id="8" class="button">
                        <img src="images/Key8.png" alt="">
                        <h2>Button 8</h2>
                        <img src="images/asterick.png" class="unsaved-icon" alt="images/asterick">
                    </div>
                    <div id="9" class="button">
                        <img src="images/Key9.png" alt="">
                        <h2>Button 9</h2>
                        <img src="images/asterick.png" class="unsaved-icon" alt="images/asterick">
                    </div>
                </div>
                <!-- <div class="buy">
                    <h2>Preorder your MacroPad today!</h2>
                    <img src="images/MacroPad.png" alt="MacroPad">
                </div> -->
            </div>
            <div id="one" class="editor-window scrollbar-hidden">
                <div class="title">
                    <h1>Macro Editor</h1>
                    <i id="settings-cog" class="fas fa-cog fa-2x"></i>
                </div>
                <div style="display:none;" class="editor market">
                    <?php
                        require "php/market.php";
                    ?>
                </div>
                <div style="display:none;" class="editor basic">
                    <div style="position: relative;width: 100%;height: 53vh;" id="blocklyArea">
                    </div>
                    <p style="display:none;" id="unsaved">Unsaved</p>
                </div>
                <div style="display:none;" class="editor advanced">
                    <div class="shortcuts">
                        <p>
                            Save = Ctrl(Cmd)-S
                        </p>
                        <p>
                            Load = Ctrl(Cmd)-Shift-L
                        </p>
                    </div>
                    <textarea name="editor" id="editor"></textarea>
                    <p style="display:none;" id="unsaved">Unsaved</p>
                </div>
                <div class="settings">
                    <div class="a1">
                        <h1>Button <num>1</num></h1>
                        <input type="checkbox" name="Enabled" id="Enabled" checked><label for="Enabled">Enabled</label>
                    </div>
                    <div class="desc">
                        <p id="desc">The default button works like a normal button. When you press it down it does the action a single time.</p>
                    </div>
                    <div class="a2">
                        <div class="c1"><input type="radio" id="Default" name="mode" checked><label for="Default">Default</label></div>
                        <div class="c2"><input type="radio" id="Toggle" name="mode"><label for="Toggle">Toggle</label></div>
                        <div class="c3"><input type="radio" id="Hold" name="mode"><label for="Hold">Hold</label></div>
                    </div>
                </div>
                <div class="tab">
                    <!-- <button class="tablinks" onclick="setEditor(0)">Drag & Drop</button> -->
                    <!-- <button class="tablinks" onclick="setEditor(0)">Editor</button>
                    <button class="tablinks" onclick="setEditor(1)">Compiled</button> -->
                    <button class="tabinks" onclick="download('test.mcro', JSON.stringify(saveAsMcroFile()))">Upload to Arduino</button>
                </div>
            </div>
            <div id="two" class="docs">
                <div id="markettab">
                    <h1>Presets</h1>
                    <input type="text" placeholder="Search"/>
                    <?php
                        require "php/market.php";
                    ?>
                </div>
            </div>
        </section>
    </main>
    <div style="display:none;" class="fileupload">
        <input id="upload" type="file" />
    </div>
    <div id="settings" class="modal" style="display: none;">
        <form class="modal-content animate">
            <div class="imgcontainer">
                <span onclick="document.getElementById(`settings`).style.display=`none`" class="close"
                    title="Close Modal">×</span>
                <img src="images/CGLogo.png" alt="Logo" class="logoavatar">
                <h3>Settings</h3>
                <hr>
            </div>

            <div class="container">
                <label for="theme"><b>Theme</b></label>
                <select name="theme" id="theme"></select>
                <br><br>
                <label for="editormode"><b>Editor Mode</b></label>
                <select name="editormode" id="editormode">
                </select>
                <br><br>
                <label for="repeat_interval"><b>Repeat Interval</b></label>
                <input type="number" name="repeat_interval" id="repeat_interval" min="1" max="1000" value="100"/>
                <br><br>
                <label for="advanced">Advanced Settings</label>
                <details name="advanced">
                    <label for="debounce_time"><b>Debounce Time</b></label>
                <input type="number" name="debounce_time" id="debounce_time" min="1" max="1000" value="20"/>
                <br>
                    <label for="custom">Custom Code (#includes, classes, etc.)</label>
                    <br>
                    <textarea name="custom" id="custom" style="width:100%" rows="10"></textarea>
                </details>
            </div>

            <div style="display: inline;" class="container" style="background-color:#f1f1f1">
                <!-- <button style="width: auto;" type="button" onclick="document.getElementById(`loginform`).style.display=`none`"
                    class="submitbtn">Save</button> -->
                <button type="button" onclick="document.getElementById(`settings`).style.display=`none`"
                    class="cancelbtn">Close</button>
            </div>

                </form>
    </div>

    <div class="blocklystuff">
        <?php
                            require "blockly/blockly.php";
                        ?>
    </div>

</body>
</html>
