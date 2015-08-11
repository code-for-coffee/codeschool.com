#### Progressive Enhancement

```css
element {
	background: grey;
	border-radius: 10px;
	box-shadow: 0 1px 1px rgba(0,0,0,0.75);
}

a {
  color: #c44743;
  transition-property: color;
  transition-duration: 1s;
  transition-delay: 0s;
  transition-timing-function: ease;
}

a:hover {
  color: #d56d68;

}


.element {
  background-color: #c44743;
  transition: background-color 0.6s linear 0.1s;
}

.element:hover {
  background-color: #d56d68;
}
```
