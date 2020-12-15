<script>
  export let tag;
  export let content;
  export let id;
  export let idx;
  export let handBlockChange;

  $: html = `<${tag} id="${id}">${content}</${tag}>`;

  let backslash = false;
  let oldHtml = null;

  let command = "";

  function handleChange(event) {
    let c = document.getElementById(id).innerHTML;
    handBlockChange(idx, c);
  }

  function handleKeyPress(event) {
    let shiftKey = event.shiftKey;
    let keyCode = event.keyCode;

    if (!shiftKey && keyCode == 13) {
      if (document.activeElement != document.body)
        document.activeElement.blur();
    }

    switch (keyCode) {
      case 47:
        backslash = true;
        oldHtml = document.getElementById(id).innerHTML;
        break;
      default:
        break;
    }
  }

  function handleKeyDown(event) {
    if (backslash) {
      command += event.key;
    }

    switch (event.key) {
      case "Escape":
        backslash = false;
        console.log(oldHtml);
        break;
      case "Enter":
        if (backslash) {
          let t = tag;
          switch (command) {
            case "h1Enter":
              t = "h1";
              break;
            default:
              break;
          }
          console.log(oldHtml);
          handBlockChange(idx, oldHtml, t);
          backslash = false;
        }
        break;
      default:
        break;
    }
  }

  function handleKeyUp(e){
      if(e.key == "/"){
        backslash = true;
      }
  }
</script>

<div
  contenteditable="true"
  bind:innerHTML={html}
  on:keyup={handleKeyUp}
  on:keydown={handleKeyDown}
  on:keypress={handleKeyPress}
  on:focusout={handleChange} />
  