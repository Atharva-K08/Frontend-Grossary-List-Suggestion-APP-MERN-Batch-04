import { CgProfile } from "react-icons/cg";
import { HiLightBulb } from "react-icons/hi2";
function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-body-secondary">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold" href="#">
            LOGO
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link fs-4 active me-2" aria-current="page" href="#">
                  <HiLightBulb />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-4" href="#">
                  <CgProfile />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
