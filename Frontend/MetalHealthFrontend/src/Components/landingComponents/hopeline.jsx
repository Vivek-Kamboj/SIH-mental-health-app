import React from "react";
import { Link } from "react-router-dom";
import SuicidePrevention from "../assets/Suicide-Prevention-Hotline.jpg";
import NationalDomesticViolenceHotline from "../assets/National-Domestic-Violence-Hotline.jpg";
import HearingImpairment from "../assets/Hearing-Impairment.jpeg";
import NationalRunnawaySafeway from "../assets/nationalrunnawaysafeway.png";
import LGBTHelpline from "../assets/Trevor-Lifeline-Graphic.png";
import GraduateStudentLine from "../assets/graduate-student-line.jpeg";

const Hopeline = (props) => {
  return (
    <React.Fragment>
      <section class="page-section bg-light" id="hopeline">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">HopeLine</h2>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item" align="center">
                <img
                  class="marginauto"
                  src={SuicidePrevention}
                  alt=""
                  height="200"
                  width="200"
                />
                <Link
                  href="tel:18002738255"
                  onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
                >
                  <p class="call-button">Click to Call</p>
                </Link>

                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">1-800-273-TALK</div>
                  <div class="portfolio-caption-subheading text-muted">
                    National Suicide Prevention Hotline
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item" align="center">
                <img
                  class="marginauto"
                  src={NationalDomesticViolenceHotline}
                  alt=""
                  height="200"
                  width="200"
                />
                <Link
                  href="tel:18007997233"
                  onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
                >
                  <p class="call-button">Click to Call</p>
                </Link>

                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">1-800 799-7233</div>
                  <div class="portfolio-caption-subheading text-muted">
                    National Domestic Violence Hotline
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item" align="center">
                <img
                  class="marginauto"
                  src={HearingImpairment}
                  alt=""
                  height="200"
                  width="200"
                />
                <Link
                  href="tel:18007994889"
                  onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
                >
                  <p class="call-button">Click to Call</p>
                </Link>

                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">
                    Deaf 1-800-799-4889
                  </div>
                  <div class="portfolio-caption-subheading text-muted">
                    TTY - Hearing & Speech Impaired
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div class="portfolio-item" align="center">
                <img
                  class="marginauto"
                  src={NationalRunnawaySafeway}
                  alt=""
                  height="200"
                  width="200"
                />
                <Link
                  href="tel:18007862929"
                  onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
                >
                  <p class="call-button">Click to Call</p>
                </Link>

                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">1-800-Run-Away</div>
                  <div class="portfolio-caption-subheading text-muted">
                    National Runaway Safeline
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              <div class="portfolio-item" align="center">
                <img
                  class="marginauto"
                  src={GraduateStudentLine}
                  alt=""
                  height="200"
                  width="200"
                />
                <Link
                  href="tel:18004723457"
                  onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
                >
                  <p class="call-button">Click to Call</p>
                </Link>

                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">1-800-472-3457</div>
                  <div class="portfolio-caption-subheading text-muted">
                    National Graduate Student Crisis Line
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="portfolio-item" align="center">
                <img
                  class="marginauto"
                  src={LGBTHelpline}
                  alt=""
                  height="200"
                  width="200"
                />
                <Link
                  href="tel:18664887386"
                  onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
                >
                  <p class="call-button">Click to Call</p>
                </Link>

                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">1-866-488-7386</div>
                  <div class="portfolio-caption-subheading text-muted">
                    LGBTQ Crisis Hotline
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hopeline;
