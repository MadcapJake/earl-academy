---
layout: post
title: Welcome New Earlites!
---

Earl Academy is a collection of tutorials, a reference manual, and a series of articles on tooling, interesting modules and the usage of [Earl Grey](https://breuleux.github.io/earl-grey/) in general.  

Earl Grey is a highly expressive and fun compile-to-js language.  Its syntax is similar to Python's but with a few unique elements and a heaping serving of JavaScript in that you can access Node's standard API.  There is so much that I want to write about this lovely little language and I'd like to share this material with you!  Install Earl Grey, fire up the `earl` [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) and hack on something in a fun futureproof language!

Check out Earl Grey's page on [use](https://breuleux.github.io/earl-grey/use.html) and read through the [learn](https://breuleux.github.io/earl-grey/doc.html) page while you're there. This site will cover much of what's there but it's good to read the original source and then come here to solidify your knowledge.  I want this site to include details on the use of the node standard libraries and also popular npm packages (or often, how you can avoid using some common utility packages).

### Goals

This site will contain a lot of material--but at first, it's good to layout what the vision is.  If anyone is interested in contributing, this is a good overview of what needs to be done and perhaps I'll even come back and update this with the current status of various elements of the site.

* Tutorials
  - Basics (literal data, conditionals, functions)
  - Objects and Classes
  - Pattern Matching
  - Macros
  - DBS ("moto" operator)
  - Async and Generators
* Reference
  + EG builtin functions, macros, types, and classes
  + Node standard libaries (Filesystem, process, path, child_process)
  + Utility libraries (Underscore, Ramda)
  + Web libraries (jQuery)
  + View frameworks (Mithril.js, Cycle.js, React)
  + Server frameworks (Koa, Express)
  + Testings (Mocha, AVA, TAPE)
  + Add more!
* Articles
  - EG vs {ES6/ES7, CoffeeScript, LiveScript, ...} series
  - Tips & Tricks series
  - Compile-to-js vision/purpose articles
  - Smaller module pieces should be articles (can be grown and moved to reference later)

### Contributing

Submit your ideas, issues, and pull requests on our github repo.  This is a big documenting project and I could use *all* the help you're willing to give!  If you feel that you'd be more interested in supporting me financially, perhaps I'd set up a patreon or a donation link ([let me know](mailto:madcap.russo+earl-academy@gmail.com)).  But first, I need to get *a ton* of content up!

### Value

Earl Grey is an incredibly powerful, highly expressive, and fun-to-write language.  In our present day world of powerful computers in the palms of our hands, any minor performance hit is really neglible compared to productivity gained or just simply the joy of writing in a language that was built *for* programmers.

That being said, the performance of Earl Grey would only be noticeable on performance-critical highly computationally intense programs which you wouldn't likely consider Earl Grey for anyways.  The additional weight of Earl Grey on the web is minor and much of the functionality gained by using Earl Grey means less utility libraries are needed to write expressive code.

I'd like to share an example from Earl Grey's github repo that is a fun example of using Earl Grey's `match` keyword and a few other neat features of Earl-Grey along the way:

```earl-grey
match thing:
   0 ->
      print "The thing is zero"
   < 0 ->
      print "The thing is negative"
   R"hello (.*)"? x ->
      ;; note: R"..." is a regular expression
      print 'The thing is saying hello'
   Number? x or String? x ->
      print "A number or a string"
   {x, y, z} ->
      print 'An array containing {x}, {y} and {z}'
   {=> name} ->
      print 'The thing has a "name" field'
   else ->
      print "I don't know what the thing is!"
```

If that looks interesting to you, take a look around!  If that looks really confusing, also take a look around (but maybe start at the Earl Grey homepage).
