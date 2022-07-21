const pagination=document.createElement("section");
pagination.setAttribute("class","pages");

pagination.innerHTML=` <ul class="page">
<li>First</li>
<li>Previous</li>
<li>1</li>
<li class="bg2">2</li>
<li>3</li>
<li>4</li>
<li>5</li>
<li class="bg">6</li>
<li>7</li>
<li>8</li>
<li>9</li>
<li>10</li>
</ul>`;
document.body.append(pagination);