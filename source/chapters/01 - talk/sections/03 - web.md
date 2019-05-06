---
title: The Web platform
tagline: a.k.a. the holy trinity
---

The **Web platform** is really the combination of three separate technologies:

```dot
digraph {
  rankdir = TD
  bgcolor = transparent

  Web [label="The Web Platform"]

  Web -> HTML
  Web -> CSS
  Web -> JS

  HTML -> htmldesc [dir=none]
  CSS -> cssdesc [dir=none]
  JS -> jsdesc [dir=none]

  htmldesc [shape=box;label="Content"]
  cssdesc [shape=box;label="Style &\nLayout"]
  jsdesc [shape=box;label="Behaviour"]
}
```

~

(There was also a dark time when **Java applets** were used in webpages, but we don't talk about that...)

```dot
digraph {
  rankdir = TD
  bgcolor = transparent

  Web [label="The Web Platform"]

  Web -> HTML
  Web -> CSS
  Web -> JS
  Web -> Java [style=dashed]

  Java [style=dashed]

  HTML -> htmldesc [dir=none]
  CSS -> cssdesc [dir=none]
  JS -> jsdesc [dir=none]
  Java -> javadesc [dir=none,style=dashed]

  htmldesc [shape=box;label="Content"]
  cssdesc [shape=box;label="Style &\nLayout"]
  jsdesc [shape=box;label="Behaviour"]
  javadesc [shape=box;style=dashed;label="Content, Style &\nBehaviour"]
}
```

~

(And we don't acknowledge the existence of **flash** either)

```dot
digraph {
  rankdir = TD
  bgcolor = transparent

  Web [label="The Web Platform"]

  Web -> HTML
  Web -> CSS
  Web -> JS
  Web -> Java [style=dashed]
  Web -> Flash [style=dashed]

  Java,Flash [style=dashed]

  HTML -> htmldesc [dir=none]
  CSS -> cssdesc [dir=none]
  JS -> jsdesc [dir=none]
  Java -> javadesc [dir=none,style=dashed]
  Flash -> flashdesc [dir=none,style=dashed]

  htmldesc [shape=box;label="Content"]
  cssdesc [shape=box;label="Style &\nLayout"]
  jsdesc [shape=box;label="Behaviour"]
  javadesc [shape=box;style=dashed;label="Content, Style &\nBehaviour"]
  flashdesc [shape=box;style=dashed;label="Content, Style &\nBehaviour"]
}
```

~

Traditionally, **web apps looked like this**:

```dot
digraph {
  rankdir = LR
  bgcolor = transparent

  frontend -> backend [dir=back;label="generates"]

  frontend -> frontstuff [dir=none]
  backend -> backstuff [dir=none]

  frontstuff [shape=box;label="UI"]

  backstuff [shape=box;label="business logic,\ndatabase"]

  {rank=same;frontend,frontstuff}
  {rank=same;backend,backstuff}
}
```

Web tech was **just the UI**. The real coding was done in `php` / `ruby` / `java` / `.NET`.

~

But a **modern SPA** (Single Page Application) is more like this:

```dot
digraph {
  rankdir = LR
  bgcolor = transparent

  frontend -> backend [label="queries"]

  frontend -> frontstuff [dir=none]
  backend -> backstuff [dir=none]

  frontstuff [shape=box;label="UI, logic"]

  backstuff [shape=box;label="database"]

  {rank=same;frontend,frontstuff}
  {rank=same;backend,backstuff}
}
```

~

Additionally, web tech has **escaped from the browser**:

```dot
digraph {
  rankdir = LR
  bgcolor = transparent

  webapp [label="web app"]

  webapp -> browser
  webapp -> phonegap -> smartphone
  webapp -> electron -> desktop

  phonegap, electron [shape=box]

  {rank=same; browser,smartphone,desktop}
}
```

~

And blurring the lines even further - there are frameworks to **compile web to native code**:

```dot
digraph {
  rankdir = LR
  bgcolor = transparent

  webapp [label="web app"]

  webapp -> compiler [color=red]
  compiler [shape=box,color=red,fontcolor=red]
  compiler:e -> smartphone [constraint=false,color=red]
  compiler:e -> desktop [constraint=false,color=red]

  webapp -> browser
  webapp -> phonegap -> smartphone
  webapp -> electron -> desktop

  phonegap, electron [shape=box]

  {rank=same; browser,smartphone,desktop}
  {rank=same; webapp, compiler}
}
```
