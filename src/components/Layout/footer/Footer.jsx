import React from "react";
import css from "./Footer.module.css";
import plant from "../../../assets/Group 19.svg";
import logo from "../../../assets/Logo (3).svg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import footer from "../../../assets/image 16.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={css.footer}>
          <div className={css.content}>
            <div className={css.block}>
              <img src={plant} alt="" />
              <h1>Garden Care</h1>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className={css.block}>
              <img src={plant} alt="" />
              <h1>Plant Renovation </h1>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className={css.block}>
              <img src={plant} alt="" />
              <h1>Watering Graden </h1>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className={css.block2}>
              <h1>Would you like to join newsletters?</h1>
              <div className={css.btns}>
                <input type="text" placeholder="enter your email address..." />
                <button>Join</button>
              </div>
              <p>
                We usually post offers and challenges in newsletter. We’re your
                online houseplant destination. We offer a wide range of
                houseplants and accessories shipped directly from our
                (green)house to yours!{" "}
              </p>
            </div>
          </div>
          <div className={css.footer_shop}>
            <img src={logo} alt="" />
            <div className={css.card}>
              <button>
                <FaMapMarkerAlt />
              </button>
              <p>
                70 West Buckingham Ave. <br /> Farmingdale, NY 11735
              </p>
            </div>
            <div className={css.card}>
              <button>
                <MdCancelPresentation />
              </button>
              <p>contact@greenshop.com</p>
            </div>
            <div className={css.card}>
              <button>
                <MdLocalPhone />
              </button>
              <p>contact@greenshop.com</p>
            </div>
          </div>
          <div className={css.last_footer}>
            <div className={css.box}>
              <ul>
                <li>My Account</li>
                <li>My Account</li>
                <li>Our stores</li>
                <li>Contact us</li>
                <li>Career</li>
                <li>Specials</li>
              </ul>
            </div>
            <div className={css.box}>
              <ul>
                <li>Help & Guide</li>
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Shipping & Delivery</li>
                <li>Product Policy</li>
                <li>How to Return</li>
              </ul>
            </div>
            <div className={css.box}>
              <ul>
                <li>Categories</li>
                <li>House Plants</li>
                <li>Potter Plants</li>
                <li>Seeds</li>
                <li>Small Plants</li>
                <li>Accessories</li>
              </ul>
            </div>

            <div className={css.box}>
              <h1>Social Media</h1>
              <div className={css.ikons}>
                <button>
                  <FaFacebookF />
                </button>
                <button>
                  <FaInstagram />
                </button>

                <button>
                  <CiTwitter />
                </button>
                <button>
                  <IoLogoLinkedin />
                </button>
                <button>
                  <FaYoutube />
                </button>
              </div>
              <h1>We accept</h1>
              <img src={footer} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
