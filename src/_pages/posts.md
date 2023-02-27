---
layout: page
title: Posts
paginate:
  collection: posts
  per_page: 3
---

<ul>
  <% paginator.resources.each do |post| %>
    <li>
      <a href="<%= post.relative_url %>"><%= post.data.title %></a>
    </li>
  <% end %>
</ul>

<a href="<%= paginator.previous_page_path %>">Previous</a>
<a href="<%= paginator.next_page_path %>">Next</a>

If you have a lot of posts, you may want to consider adding [pagination](https://www.bridgetownrb.com/docs/content/pagination)!
