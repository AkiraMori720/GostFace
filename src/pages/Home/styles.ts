import styled from 'styled-components';
import {ArrowRight} from '@styled-icons/bootstrap/ArrowRight';
import {File} from '@styled-icons/boxicons-regular/File';
import {FileBlank} from '@styled-icons/boxicons-regular/FileBlank';
import {Telegram} from '@styled-icons/bootstrap/Telegram';
import {Twitter} from '@styled-icons/bootstrap/Twitter';
import {EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline';
import {ChartLine} from '@styled-icons/fa-solid/ChartLine';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .home{
      background-image: url(/images/bg_t.png);
      background-size: cover;
      background-repeat: no-repeat;
  }
`;

export const Section = styled.section`
  width: 100%;

  h2.title {
    margin-bottom: 1.5rem;
    letter-spacing: 1px!important;
    word-break: break-word;
  }
  p.lead {
    font-size: 16px;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  .mainbtn {
    background-color: #9a009a;
    padding: 2rem 3rem;
    margin-top: 8px;
    border-radius: 30px;
    text-decoration: none!important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mainbtn a{
    color: #fff;
  }
  .icon-box img {
    height: 150px;
  }
  .icon-box-d {
    flex: .25 0 25%!important;
  }
  .icon-box .icon-box-holder {
    color: #ffffff;
    background-color: #101619;
    padding: 50px 25px;
    text-align: center;
    border-radius: 5px;
    margin: 15px;
    font-family: Montserrat;
    letter-spacing: 0!important;
  }
  .icon-box .icon-box-holder h3.title_text {
    font-weight: 300!important;
    font-size: 15px;
    margin: 10px 0;
    letter-spacing: 0!important;
    line-height: 24px;
  }
  .icon-box .icon-box-holder a.button_text {
      color: #ffffff;
      border: 1px solid;
      padding: 8px;
      border-radius: 5px;
      font-weight: 700;
      display: block;
      text-transform: uppercase;
      font-size: 12px;
      transition: all .3s ease;
      -webkit-transition: all .3s ease;
      text-decoration: none!important;
  }
  h4 {
    color: #9a009a;
    margin-bottom: 2rem;
  }
  .update-caption {
    font-size: 16px;
  }
   .infobox {
      padding: 1rem;
      background-size: cover;
      background-repeat: no-repeat;
      padding: 3rem 6rem 3rem 6rem;
  }
  .box-credit {
    background-image: url(/images/sq1_t.png);
  }
  .box-bnb {
    background-image: url(/images/sq2_t.png);
  }
  .box-redistribution {
    background-image: url(/images/sq3_t.png);
  }
  .tokenomics-back {
    background-image: url(/images/scareonomics_b.png);
  }
  .faq {
      background-color: #fff;
      color: #000;
      cursor: pointer;
      padding: 18px;
      width: 100%;
      border: none;
      text-align: left;
      outline: 0;
      transition: .4s;
      margin-bottom: 2rem;
  }
  .panel {
    padding: 0 18px;
    background-color: #000;
    overflow: hidden;
    border-radius: 0;
    margin: -2rem 0 2rem 0;
  }
  .panel p {
    color: #fff;
    margin-top: 1rem;
  }
  .faq-mark{
    color: #42c4ec;
    font-weight: bold;
  }
  .box-telegram{
    background-color: #32afed !important;
  }
  .box-twitter{
    background-color: rgb(29, 161, 242) !important;
  }
  .box-email{
    background-color: #dd3333 !important;
  }
  .box-chart{
    background-color: rgb(153, 0, 153) !important;
  }

`;

export const Content = styled.div`
    max-width: 1216px;
    float: none;
    margin: auto;
`;

export const ArrowRightIcon = styled(ArrowRight)`
  color: white;
  margin-left: 8px
`;
export const FileIcon = styled(File)`
  color: white;
`;
export const FileBlankIcon = styled(FileBlank)`
  color: white;
`;

export const TelegramIcon = styled(Telegram)`
  color: white;
`;

export const TwitterIcon = styled(Twitter)`
  color: white;
`;

export const EmailIcon = styled(EmailOutline)`
  color: white;
`;

export const ChartIcon = styled(ChartLine)`
  color: white;
`;
