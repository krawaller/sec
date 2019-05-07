---
title: The build step
tagline:
---

We will **bundle** our code to one (or more) packages

```dot
digraph {
bgcolor = transparent
rankdir = LR

subgraph cluster_source {
label = "Source code"
style = dashed
entry, file2, file3, file4, file5
}

file3 -> file2 -> entry [dir=back style=dotted]
file3 -> entry [dir=back style=dotted]
file4 -> file2 [dir=back style=dotted]
file5 -> file2 [dir=back style=dotted]

bundler [shape=rectangle, label="build\nstep"]

entry -> bundler -> bundle

subgraph cluster_dist {
label = "Distributed code"
style = dashed
bundle
}
}
```

~

It is also common to **transpile** the code:

```dot
digraph {
  bgcolor = transparent
  rankdir = LR
  transpiler [shape=box]
  ES2018 -> transpiler -> ES5
}
```

https://babeljs.io/

~

Sometimes from something **other than JavaScript**!

```dot
digraph {
  bgcolor = transparent
  rankdir = LR
  transpiler [shape=box]
  TypeScript -> transpiler:w
  transpiler -> ES5
  PureScript -> transpiler:w
  ClojureScript -> transpiler:w
  Elm -> transpiler:w
  Rust -> transpiler:w
  Dart -> transpiler:w
}
```

(more on TypeScript later)

~

Sometimes we target a **tailored version of JS**:

```dot
digraph {
  bgcolor = transparent
  rankdir = LR
  from [style=invis]
  from -> transpiler [style=dashed]
  transpiler [shape=box]
  transpiler -> ASM
}
```

~

A transpiler works through the **Abstract Syntax Tree**...

```dot
digraph {
  bgcolor = transparent
  rankdir = LR
  code
  code -> parser
  parser [shape=box]
  parser -> ASM

  writer [shape=box]
  ASM2 [label="ASM"]
  code2 [label="code"]

  ASM -> ASM2 [style=dashed constraint=none]

  ASM2 -> writer -> code2
}
```

https://astexplorer.net/

~

...which is the foundation for some **modern tools**

```dot
digraph {
  bgcolor = transparent
  rankdir = LR
  code
  code -> parser
  parser [shape=box]
  parser -> ASM

  eslint, prettier [shape=box]
  ASM:e -> eslint:w
  eslint -> validation
  ASM:e -> prettier:w
  prettier -> JS
}
```

https://eslint.org/
https://prettier.io/
