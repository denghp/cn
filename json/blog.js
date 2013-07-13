---
layout: nil
---
var blogpost = [{% for post in site.categories.blog %}['{{post.title}}', '{{site.base_url}}{{post.url}}', '{{ post.date| date:"%Y-%m-%d"}}']{% if forloop.last == false %}, {% endif %}{% endfor %}];