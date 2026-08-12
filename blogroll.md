---
layout: default
title: Blogroll
---

# Blogroll

Here are some recommended blogs:

{% for category in site.data.blogroll %}
## {{ category[1].title }}
<ul>
{% for blog in category[1].blogs %}
  <li>
    <a href="{{ blog.url }}">{{ blog.name }}</a><br>
    <small>{{ blog.excerpt }}</small>
  </li>
{% endfor %}
</ul>
{% endfor %}
