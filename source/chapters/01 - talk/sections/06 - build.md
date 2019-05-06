---
title: The build step
tagline:
---

```dot
digraph {
bgcolor = transparent
rankdir = LR

subgraph cluster_source {
label = "Source code in ES6+"
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
label = "Distributed ES5"
style = dashed
bundle
}
}
```
