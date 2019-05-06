---
title: Frameworks
tagline:
---

```dot
digraph {
  rankdir = LR
  bgcolor = transparent

  col0, col1, col2, col3, col4, col5, col6, col7 [label="", fixedsize="false", width=0, height=0, shape=none]

  col0 -> col1 -> col2 -> col3 -> col4 -> col5 -> col6 -> col7 [color=transparent]

  React, Angular, Ember, Vue [shape=box]

  library -> React -> Vue -> Angular -> Ember -> framework [arrowhead=none]

  {rank=same; col0, library}
  {rank=same; col7, framework}
  {rank=same; col1, React}
  {rank=same; col4, Vue}
  {rank=same; col5, Angular}
  {rank=same; col6, Ember}
}
```
