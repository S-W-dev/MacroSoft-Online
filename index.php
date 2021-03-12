<?php

require "../header.php";

?>
<!DOCTYPE html5>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <!-- font awesome -->
    <script src="https://kit.fontawesome.com/992f70584c.js" crossorigin="anonymous"></script>

    <!-- stylesheets -->
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="styles-large.css">
    <link rel="stylesheet" href="settings-popup.css">

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

    <!-- scripts -->
    <script src="main.js" defer></script>
    <script src="settings-popup.js" defer></script>
    <script src="save-code.js" defer></script>

    <title>MacroPad Editor</title>
</head>
<body>
    <main>
        <section class="glass">
            <div class="dashboard">
                <br>
                <div class="logo">
                    <img src="images/CGLogo.png" class="logo-img" id="CG"alt="Logo">
                    <h3>MacroPad Editor</h3>
                    <hr>
                    <h2>Buttons</h2>
                </div>
                <div id="buttons" class="buttons">
                    <div id="1" class="button">
                        <img src="images/Key1.png" alt="">
                        <h2>Button 1</h2>
                        <img src="asterick.png" class="unsaved-icon" alt="asterick">
                    </div>
                    <div id="2" class="button">
                        <img src="images/Key2.png" alt="">
                        <h2>Button 2</h2>
                        <img src="asterick.png" class="unsaved-icon" alt="asterick">
                    </div>
                    <div id="3" class="button">
                        <img src="images/Key3.png" alt="">
                        <h2>Button 3</h2>
                        <img src="asterick.png" class="unsaved-icon" alt="asterick">
                    </div>
                    <div id="4" class="button">
                        <img src="images/Key4.png" alt="">
                        <h2>Button 4</h2>
                        <img src="asterick.png" class="unsaved-icon" alt="asterick">
                    </div>
                    <div id="5" class="button">
                        <img src="images/Key5.png" alt="">
                        <h2>Button 5</h2>
                        <img src="asterick.png" class="unsaved-icon" alt="asterick">
                    </div>
                    <div id="6" class="button">
                        <img src="images/Key6.png" alt="">
                        <h2>Button 6</h2>
                        <img src="asterick.png" class="unsaved-icon" alt="asterick">
                    </div>
                    <div id="7" class="button">
                        <img src="images/Key7.png" alt="">
                        <h2>Button 7</h2>
                        <img src="asterick.png" class="unsaved-icon" alt="asterick">
                    </div>
                    <div id="8" class="button">
                        <img src="images/Key8.png" alt="">
                        <h2>Button 8</h2>
                        <img src="asterick.png" class="unsaved-icon" alt="asterick">
                    </div>
                    <div id="9" class="button">
                        <img src="images/Key9.png" alt="">
                        <h2>Button 9</h2>
                        <img src="asterick.png" class="unsaved-icon" alt="asterick">
                    </div>
                </div>
                <!-- <div class="buy">
                    <h2>Preorder your MacroPad today!</h2>
                    <img src="images/MacroPad.png" alt="MacroPad">
                </div> -->
            </div>
            <div class="editor-window">
                <br><br>
                <div class="title">
                    <h1>Macro Editor</h1>
                    <i id="settings-cog" class="fas fa-cog fa-2x"></i>
                </div>
                <div class="editor basic">
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
                <div style="" class="editor advanced">
                    <div class="shortcuts">
                        <p>
                            Save = Ctrl(Cmd)-S
                        </p>
                        <p>
                            Load = Ctrl(Cmd)-Shift-L
                        </p>
                    </div>
                    <textarea name="advanced" id="advanced"></textarea>
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
            <div class="docs">
                <br><br>
                <h1>Docs</h1>
                <input type="text" placeholder="Search"/>
                <iframe src="https://concretegames.net/macrosoft"></iframe>
            </div>
        </section>
    </main>
    <div style="display:none;" class="fileupload">
        <input id="upload" type="file" />
    </div>

    <div id="settings" class="modal" style="display: none;">
        <div class="modal-content animate">
            <div class="imgcontainer">
                <span onclick="document.getElementById(`settings`).style.display=`none`" class="close"
                    title="Close Modal">×</span>
                <img src="images/CGLogo.png" alt="Logo" class="logoavatar">
                <h3>Settings</h3>
                <hr>
            </div>

            <div class="container">
                <label for="theme"><b>Theme</b></label>
                <select placeholder="Enter Username/E-mail" name="theme" id="theme">
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" onclick="document.getElementById(`loginform`).style.display=`none`"
                    class="cancelbtn">Close</button>
            </div>

        </div>
    </div>
</body>
</html>