const DragScroll = (containerClass: string) => {
    const slider : HTMLDivElement | any = document.querySelector(containerClass);
    let isDown = false;
    let startX: any;
    let scrollLeft : any;

    slider.addEventListener('mousedown', (e: any) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e: any) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
}



export default DragScroll;