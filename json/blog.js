---
layout: nil
---
var blogpost = [{% for post in site.categories.blog %}['{{post.title}}', '{{post.url}}', '{{ post.date| date:"%Y-%m-%d"}}']{% if forloop.last == false %}, {% endif %}{% endfor %}];