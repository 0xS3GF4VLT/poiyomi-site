"use strict";(self.webpackChunkpoiyomi_site=self.webpackChunkpoiyomi_site||[]).push([[13],{6165:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(3366),l=a(7294),n=a(6010),s=a(261),i=a(6742),c="sidebar_2ahu",m="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",b=a(4973);function E(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var p=a(571),v=["sidebar","toc","children"];var f=function(e){var t=e.sidebar,a=e.toc,i=e.children,c=(0,r.Z)(e,v),m=t&&t.items.length>0;return l.createElement(s.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(E,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},l.createElement(p.Z,{toc:a})))))}},94:function(e,t,a){a.r(t);var r=a(7294),l=a(6165),n=a(6584),s=a(1773);t.default=function(e){var t=e.tags,a=e.sidebar,i=(0,s.MA)();return r.createElement(l.Z,{title:i,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},r.createElement("h1",null,i),r.createElement(n.Z,{tags:Object.values(t)}))}},6584:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),l=a(7211),n=a(1773),s="tag_21yA";function i(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:s},r.createElement(l.Z,e))}))),r.createElement("hr",null))}var c=function(e){var t=e.tags,a=(0,n.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return r.createElement(i,{key:e.letter,letterEntry:e})})))}}}]);