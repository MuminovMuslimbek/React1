import './App.css';
import myteamLogo from '../public/myteam.svg';
import build1 from '../public/build1.svg';
import build2 from '../public/build2.svg';
import build3 from '../public/build3.svg';
import pos1 from '../public/pos1.svg';
import pos2 from '../public/pos2.svg';
import pos3 from '../public/pos3.svg';
import pos4 from '../public/pos4.svg';
import pos5 from '../public/pos5.svg';
import pos6 from '../public/pos6.svg';
import facebook from '../public/facebook.svg';
import pinterest from '../public/pinterest.svg';
import twitter from '../public/twitter.svg';
import stories1 from '../public/stories1.png';
import stories2 from '../public/stories2.png';
import stories3 from '../public/stories3.png';

function App() {
  return (
    <div>
      <header>
        <div className="container header__contaienr">
          <div className="header_logo">
            <a href="../index.html">
              <img src={myteamLogo} alt="logo" />
            </a>
            <ul>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
            </ul>
          </div>
          <button>contact us</button>
        </div>
        <nav>
          <div className="container nav__container">
            <h1>
              Find the best
              <span> talent</span>
            </h1>
            <div className="nav_text">
              <div></div>
              <p>
                Finding the right people and building high performing teams can be
                hard. Most companies aren’t tapping into the abundance of global
                talent. We’re about to change that.
              </p>
            </div>
          </div>
        </nav>
        <img src={pos1} alt="icon" className="pos1" />
        <img src={pos2} alt="icon" className="pos2" />
      </header>
      <main>
        <section className="build">
          <div className="container build__container">
            <div className="position"></div>
            <div className="build_bottom">
              <h2>Build & manage distributed teams like no one else.</h2>
              <div className="build_bloks">
                <div className="build_bottom-block">
                  <img src={build1} alt="buildIcon" />
                  <div className="build_block-text">
                    <h3>Experienced Individuals</h3>
                    <p>
                      Our network is made up of highly experienced professionals
                      who are passionate about what they do.
                    </p>
                  </div>
                </div>
                <div className="build_bottom-block">
                  <img src={build2} alt="buildIcon" />
                  <div className="build_block-text">
                    <h3>Easy to Implement</h3>
                    <p>
                      Our processes have been refined over years of implementation
                      meaning our teams always deliver.
                    </p>
                  </div>
                </div>
                <div className="build_bottom-block">
                  <img src={build3} alt="buildIcon" />
                  <div className="build_block-text">
                    <h3>Enhanced Productivity</h3>
                    <p>
                      Our customized platform with in-built analytics helps you
                      manage your distributed teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={pos3} alt="" className="pos3" />
        </section>
        <section className="stories">
          <div className="stories__container container">
            <h2>
              Delivering real results for top companies. Some of our
              <span> success stories.</span>
            </h2>
            <div className="stories_bottom">
              <div className="stories_block">
                <p>
                  “The team perfectly fit the specialized skill set required.
                  They focused on the most essential features helping us launch
                  the platform eight months faster than planned.”
                </p>
                <div className="stories-title">
                  <h4>Kady Baker</h4>
                  <span>Product Manager at Bookmark</span>
                </div>
                <img src={stories1} alt="stories img" />
              </div>
              <div className="stories_block">
                <p>
                  “We needed to automate our entire onboarding process. The team
                  came in and built out the whole journey. Since going live, user
                  retention has gone through the roof!”
                </p>
                <div className="stories-title">
                  <h4>Aiysha Reese</h4>
                  <span>Founder of Manage</span>
                </div>
                <img src={stories2} alt="stories img" />
              </div>
              <div className="stories_block">
                <p>
                  “Amazing. Our team helped us build an app that delivered a new
                  experience for hiring a physio. The launch was an instant
                  success with 100k downloads in the first month.”
                </p>
                <div className="stories-title">
                  <h4>Arthur Clarke</h4>
                  <span>Co-founder of MyPhysio</span>
                </div>
                <img src={stories3} alt="stories img" />
              </div>
            </div>
          </div>
          <img src={pos4} alt="img" className="pos4" />
          <img src={pos5} alt="img" className="pos5" />
        </section>
        <section className="barner">
          <div className="container barner__container">
            <h2>Ready to get started?</h2>
            <button>contact us</button>
          </div>
          <img src={pos6} alt="pos6" className="pos6" />
        </section>
      </main>
      <footer>
        <div className="footer__container container">
          <div className="footer_left">
            <div className="footer_left-logo">
              <a href="../index.html">
                <img src={myteamLogo} alt="logo" />
              </a>
              <ul>
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
              </ul>
            </div>
            <p>
              987 Hillcrest Lane
              <br />
              Irvine, CA
              <br />
              California 92714
              <br />
              Call Us : 949-833-7432
            </p>
          </div>
          <div className="footer_right">
            <div className="apps">
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={pinterest} alt="pinterest" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
