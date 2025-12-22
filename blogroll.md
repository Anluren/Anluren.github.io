---
layout: default
title: Blogroll
---

# Blogroll

Here are some recommended blogs related to C++ programming:

<ul>
{% for blog in site.data.blogroll %}
  <li>
    <a href="{{ blog.url }}">{{ blog.name }}</a><br>
    <small>{{ blog.excerpt }}</small>
  </li>
{% endfor %}
</ul>
