<!--<script ✂prettier:content✂="CglpbXBvcnQgeyBuYW1lLCBncmVldGluZywgdGFnLCBjb250ZW50LCBibG9jayB9IGZyb20gJy4vc3RvcmVzL0Jsb2NrLmpzJzsK" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script><div contenteditable="true" bind:innerHTML= {$block} />

<h1>{$tag}</h1>
<h1>{$content}</h1>
<h1>{$block}</h1>

<h1  contenteditable="true">{$greeting}</h1>
<input bind:value={$name}>

<button on:click="{() => $name += '!'}">
	Add exclamation mark!
</button> -->
<script>
  import { ContentEditable } from "./ContentEditable/";

  let block = [
    { tag: "h1", content: "mahesa" },
    { tag: "h3", content: "rohman" },
  ];

  function tagChange(idx, content, tag = null) {
	block[idx].content = content;
	if(tag != null){
		block[idx].tag = tag;
	}
  }
</script>

<div id="main">
  <h1 contenteditable="true">greeting</h1>
  <h1 contenteditable="true">sadfasdfasdf</h1>

  <ContentEditable
    id="block1"
    idx={0}
    tag={block[0].tag}
    content={block[0].content}
    handBlockChange={tagChange} />

  <ContentEditable
    id="block2"
    idx={1}
    tag={block[1].tag}
    content={block[1].content}
    handBlockChange={tagChange} />
</div>
