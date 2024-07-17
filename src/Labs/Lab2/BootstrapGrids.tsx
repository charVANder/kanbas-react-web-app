export default function BootstrapGrid() {
  return (
    <div>
      <h2>Bootstrap</h2>
      <div id="wd-bs-grid-system">
        <h2>Grid system</h2>
        <div className="row">
          <div className="col bg-danger text-white">
            <h3>Left half</h3>
          </div>
          <div className="col bg-primary text-white">
            <h3>Right half</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-4 bg-warning">
            <h3>One thirds</h3>
          </div>
          <div className="col-8 bg-success text-white">
            <h3>Two thirds</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-2 bg-dark text-white">
            <h3>Sidebar</h3>
          </div>
          <div className="col-8 bg-secondary text-white">
            <h3>Main content</h3>
          </div>
          <div className="col-2 bg-info">
            <h3>Sidebar</h3>
          </div>
        </div>
      </div>

      <div id="wd-bs-responsive-grids">
        <h2>Responsive grid system</h2>
        <div className="row">
          <div
            className="col-12 col-md-6 col-xl-3
                    bg-warning"
          >
            <h3>Column A</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
              doloremque. Nostrum nam, cumque autem similique nobis saepe
              blanditiis. Magni repellendus nisi quasi mollitia reiciendis
              nostrum nobis cupiditate nemo, natus doloremque!
            </p>
          </div>
          <div
            className="col-12 col-md-6 col-xl-3
                    bg-primary text-white"
          >
            <h3>Column B</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quae mollitia beatae necessitatibus, aperiam id repudiandae fuga,
              iste recusandae rem quidem deleniti quod officiis odio libero ipsa
              velit eaque omnis.
            </p>
          </div>
          <div
            className="col-12 col-md-6 col-xl-3
                    bg-danger text-white"
          >
            <h3>Column C</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              veritatis assumenda tenetur fuga. Sequi doloribus, hic voluptas
              sunt voluptatum corporis tempore repellat ipsum eum provident,
              beatae officia blanditiis, in labore.
            </p>
          </div>
          <div
            className="col-12 col-md-6 col-xl-3
                    bg-success text-white"
          >
            <h3>Column D</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              facere praesentium omnis sequi odio repudiandae, ab accusamus
              vitae. Quisquam facere, est voluptatem dolor adipisci
              necessitatibus ab pariatur voluptate quasi et?
            </p>
          </div>
        </div>
      </div>

      <div id="wd-bs-responsive-dramatic">
        <h2>Responsive grid system</h2>
        <div className="row">
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
                    bg-warning"
          >
            <h4>1</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
                    bg-primary text-white"
          >
            <h4>2</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
                    bg-danger text-white"
          >
            <h4>3</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
                    bg-success text-white"
          >
            <h4>4</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
                    bg-warning"
          >
            <h4>5</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
                    bg-primary text-white"
          >
            <h4>6</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
                    bg-danger text-white"
          >
            <h4>7</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
                    bg-success text-white"
          >
            <h4>8</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
                    bg-warning"
          >
            <h4>9</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
                    bg-primary text-white"
          >
            <h4>10</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
                    bg-danger text-white"
          >
            <h4>11</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
                    bg-success text-white"
          >
            <h4>12</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
