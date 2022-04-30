import './Landin.css'

function Carouse() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a href="product/626b31a92f3a3ebfa2b420c9">
            <img
              class="d-block w-100"
              src="https://i.ytimg.com/vi/9tobL8U7dQo/maxresdefault.jpg"
              height="560"
              width="893"
            ></img>
          </a>
        </div>
        <div class="carousel-item">
          <a href="product/626c8140e5d38dc09b14d55d">
            <img
              class="d-block w-100"
              src="https://i.ytimg.com/vi/KjqrPEtyDUQ/maxresdefault.jpg"
              height="560"
              width="893"
            ></img>
          </a>
        </div>
        <div class="carousel-item">
          <a href="product/626b31a92f3a3ebfa2b420c1">
            <img
              class="d-block w-100"
              src="https://pbs.twimg.com/media/FE-liz5XIAEeqgW.jpg"
              height="560"
              width="893"
            ></img>
          </a>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Carouse
