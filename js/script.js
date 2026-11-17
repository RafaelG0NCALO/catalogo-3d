document.querySelectorAll('.mosaic').forEach(function(m){
  var ids=m.dataset.items.split(' ').slice(0,6);
  m.classList.add('n'+ids.length);
  ids.forEach(function(id,i){
    var src=document.querySelector('.item[data-id="'+id+'"] img');
    var t=document.createElement('div'); t.className='t';
    if(src){var im=document.createElement('img'); im.src=src.src; im.alt=''; im.loading='lazy'; t.appendChild(im);}
    m.appendChild(t);
  });
});
