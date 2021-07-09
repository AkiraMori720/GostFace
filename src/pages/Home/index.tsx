import React, {useEffect} from 'react';

import * as S from './styles';
import Faq from "~/pages/Home/faq";

const faqs = [
  {
    question: "Is the presale only available on DxSale? If so, can I guarantee my space?",
    answer: "Presale for Ghostface will be on DxSale only. If you see Ghostface on another platform, it is a copy. Currently there is no whitelist available, so the presale is a first come first serve basis."
  },
  {
    question: "After how long can I expect the price to reflect on Trust Wallet?",
    answer: "Trust Wallet uses different websites, such as CoinMarketCap and CoinGecko to pull information from for pricing. Until we are on either website, Trust Wallet will not have a value for Ghostface"
  },
  {
    question: "What is the long-term goal behind Ghostface? Is my money in secure hands?",
    answer: "Cryptocurrency, in general, is a risky market. Most do not invest more than they can afford to lose. We have a lot going on in the works! Check out our whitepaper it's the best place to check what we have in store for the future!"
  },
  {
    question: "What is the BNB Reward Pool?",
    answer: "4% of every transaction is taken and added to the contract in $BNB. This amount of $BNB is called the\n" +
      "                reward pool, from which people can claim."
  },
  {
    question: "How do I passively earn $BNB?",
    answer: "All you need to do is hold $GHOSTFACE and you'll earn a share of the BNB Reward Pool, proportional to\n" +
      "                the amount of $GHOSTFACE you hold. On top of that, there is also a 1% reflection which will earn you\n" +
      "                $GHOSTFACE and be deposited straight into your wallet!"
  },
  {
    question: "How does the claim work?",
    answer: "The reward pool works by using the percentage of tokens you hold against the supply. This percentage is\n" +
      "                used to calcualte the amount of BNB you receieve when you claim. For example: if you hold 1% of the\n" +
      "                tokens, and the reward pool has 100BNB, when you claim you would receive 1BNB, reducing the reward pool\n" +
      "                to 99BNB. <br/>\n" +
      "                If another person also held 1% of the tokens and claimed after you did, they would recieve 0.99BNB, as\n" +
      "                the reward pool would have been at 99BNB.<br/>\n" +
      "                Ghostface's claim is weekly. Visit our <a href=\"dashboard\" target=\"_blank\">dashboard</a> and see how\n" +
      "                much you can claim. If you hold $GHOSTFACE, you can see the percentage of tokens you hold. This\n" +
      "                percentage is used to calculate how much of the BNB pool you can collect.<br/>\n" +
      "                All you need to do is visit the <a href=\"dashbaord\">dashboard</a>, connect your wallet, and you're ready\n" +
      "                to go. The collection date shown is the earliest you can claim next, so as long as you claim after that\n" +
      "                date/time you're good to go."
  },
  {
    question: "What timezone is the collection date in?",
    answer: "The collection date syncs to your device, so the timezone will always be your local timezone."
  },
  {
    question: "Do buys/sells affect my claim date?",
    answer: "Yes. Each buy/sell will push your collection date forward by one day. This is an intended feature to\n" +
      "                stop people from exploiting the reward pool. <b>Important Note</b>: if you sell your entire wallet, your\n" +
      "                wallet address will be 'banned', meaning your next claim date will be pushed 50 years forward."
  },
  {
    question: "What happens if I miss a daily claim?",
    answer: "The collection date shown is the earliest you can claim next. You can claim 1 minute or 1 day after, it\n" +
      "                doesn't matter. However, other people will be claiming, meaning there is a chance for the reward pool to\n" +
      "                be lower than before, which could cause you to claim less. We recommend claiming as soon as you can to\n" +
      "                ensure to get the most amount of $BNB."
  },
  {
    question: "Why are stacking rewards not implemented?",
    answer: "The reward pool works by using the percentage of tokens you hold against the supply. This percentage is\n" +
      "                used to calcualte the amount of BNB you receieve when you claim. For example: if you hold 1% of the\n" +
      "                tokens, and the reward pool has 100BNB, when you claim you would receive 1BNB, reducing the reward pool\n" +
      "                to 99BNB. <br/>\n" +
      "                If another person also held 1% of the tokens and claimed after you did, they would recieve 0.99BNB, as\n" +
      "                the reward pool would have been at 99BNB.\n" +
      "                <br/><br/>\n" +
      "                  The only way to implement stacking would be to check the last time they claimed, and increase their\n" +
      "                  percentage accordingly. For example: if you hold 1% of the pool but you miss one daily claim, when you\n" +
      "                  claimed next, it would see that you missed a claim, and increase your percentage. In this example, you\n" +
      "                  would now be at 2%. If you didn't claim for 30 days, and then claimed, your percentage would be at\n" +
      "                  30%, meaning you could claim 30% of the reward pool. If you decided to wait 100 days, your percentage\n" +
      "                  would be at 100%, so you could empty the reward pool. Because of this exploit, we have not implemented\n" +
      "                  stacking."
  },
  {
    question: "Why could I claim more $BNB yesterday?",
    answer: "The amount of BNB that gets distributed is based on percentage. The more $BNB in the reward pool, the\n" +
      "                more $BNB you can claim for your percentage holdings. The less $BNB in the reward pool, the less $BNB\n" +
      "                you can claim.<br/>\n" +
      "                The more people that claim, the less $BNB will be available for everyone else. This is why we recommend\n" +
      "                claiming as soon as possible."
  }
]

const Home: React.FC = () => {
  useEffect(() => {

    const script = document.createElement("script");

    script.src = "/js/scroll.js";
    script.async = true;

    document.body.appendChild(script);
  });

  return (
    <S.Container>

      <S.Section id="home" className="home">
        <S.Content className="col-sm-12 col-md-11 col-lg-10 col-xl-9 py-16">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left mb-4 mb-md-5 mb-lg-0 scroll slide-left scrolled">
              <h2 className="title">HOLD $GHOSTFACE and get rewarded in BNB on every transaction!</h2>
              <p className="lead">
                Ghostface is completely decentralized and all decisions are made by a community poll. Which gives our
                developers a better idea of how to move forward with Ghostface. The Ghostface developer team has no team
                tokens. In other words, our team has to participate in the $GHOSTFACE
                presale along with other investors.
              </p>
              <div className="row justify-content-around">
                <div className="col-sm-3 mainbtn">
                    <a target="_blank" href="http://exchange.pancakeswap.finance/#/swap?inputCurrency=0x0952ddffde60786497c7ced1f49b4a14cf527f76">Buy</a>
                </div>
                <div className="col-sm-3 mainbtn">
                  <a href="dashboard">Claim BNB</a>
                </div>
                <div className="col-sm-3 mainbtn">
                  <a target="_blank" href="https://poocoin.app/tokens/0x0952ddffde60786497c7ced1f49b4a14cf527f76">Chart</a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 img-main">
              <img src="/images/main_t.png" alt="Ghost Face Icon" className="img-fluid"/>
            </div>
          </div>
        </S.Content>
      </S.Section>


      <S.Section id="ecosystem" className="ecosystem">
        <S.Content className="col-sm-12 col-md-11 col-lg-10 col-xl-9 py-16">
          <div className="text-center">
            <h2 className="title">OUR ECOSYSTEM</h2>
          </div>
          <div className="row">
            <div className="col-md-4 icon-box">
              <div className="icon-box-holder">
                <img src="/images/gf.png" alt="gf"/>
                <h3 className="title_text"><b className="h2">Ghostface</b><br/>Weekly BNB Claim</h3>
                <a target="_blank" href="https://www.ghostface.finance" className="button_text">Website<S.ArrowRightIcon size={16}/></a>
              </div>
            </div>
            <div className="col-md-4 icon-box">
              <div className="icon-box-holder">
                <img src="/images/jg.png" alt="jg"/><h3 className="title_text"><b className="h2">Jigsaw</b><br/>Daily BNB Claim</h3>
                  <a target="_blank" href="https://www.ghostface.finance/jigsaw" className="button_text">Website<S.ArrowRightIcon size={16}/>
                  </a>
              </div>
            </div>
            <div className="col-md-4 icon-box">
              <div className="icon-box-holder">
                <img src="/images/pg.png" alt="pg"/><h3 className="title_text"><b className="h2">Purge</b><br/>Daily BNB Auto-Claim</h3>
                  <a target="_blank" href="https://www.ghostface.finance/purge" className="button_text">Website<S.ArrowRightIcon size={16}/></a>
              </div>
            </div>
          </div>
        </S.Content>
      </S.Section>

      <S.Section id="prices" className="prices">
        <S.Content className="col-sm-12 col-md-11 col-lg-10 col-xl-9">
            <div className="row">
              <div className="col-lg-3 col-xl-3 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                <div className="text-center">
                  <h4>Price Per 1mil</h4>
                  <p>$NaN</p>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                <div className="text-center">
                  <h4>Market Cap</h4>
                  <p>$NaN</p>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                <div className="text-center">
                  <h4>Reward Pool</h4>
                  <p>467.57BNB</p>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                <div className="text-center">
                  <h4>Liquidity</h4>
                  <p>$NaN</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <h5 className="update-caption">Updates every 5 seconds!</h5>
            </div>
        </S.Content>
      </S.Section>

      <S.Section id="features" className="features">
        <S.Content className="col-sm-12 col-md-11 col-lg-10 col-xl-9 py-16">
          <div className="row scroll fade-in-bottom">
            <div className="col-lg-12 col-xl-12 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
              <div className="text-center">
                <h2 className="title">FEATURES</h2>
                <p></p>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0 infobox box-credit">
              <div>
                <img src="/images/debit-card.png" alt=""/>
                  <h5 className="mt-4 h3"><b>4%</b><br/>Auto Liquidity Pool</h5>
                  <div>
                    4% of every transaction contributes towards automatically generating liquidity that goes into
                    Pancakeswap
                  </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0 infobox box-bnb">
              <div>
                <img src="/images/tokens.png" alt=""/>
                  <h5 className="mt-4 h3"><b>4%</b><br/>Redistribution in BNB</h5>
                  <div>4% of every buy/sell is taken and redistributed to all Ghostface holders.</div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0 infobox box-redistribution">
              <div>
                <img src="/images/diamonds.png" alt=""/>
                  <h5 className="mt-4 h3"><b>1%</b><br/>$GHOSTFACE Redistribution</h5>
                  <div>1% of every buy/sell is redistributed to all Ghostface holders in $GHOSTFACE</div>
              </div>
            </div>
          </div>
        </S.Content>
      </S.Section>

      <S.Section id="tokenomics" className="tokenomics">
        <div className="tokenomics-back">
          <S.Content className="col-sm-12 col-md-11 col-lg-10 col-xl-9 py-16 scroll fade-in-bottom">
            <div className="row align-items-center">
              <div className="text-center">
                <h2 className="title">SCAREONOMICS</h2>
                <img src="/images/scareonomics__.png" alt="Icon for Tokenomics" className="scarenomics-img"/>
                <div className="text-center scare-1">
                  <label className="scare-1-text">Total Supply: <br/><span>1,000,000,000,000</span></label>
                  <label className="scare-1-text">Presale Allocation: <br/><span>1,000,000,000,000</span></label>
                </div>
                <div className="text-center scare-2">
                  <label className="scare-2-text">Soft Cap: <br/><span>1250BNB</span></label>
                  <label className="scare-2-text">PancakeSwap: <br/><span>1,000,000,000,000</span></label>
                </div>
                <div className="text-center scare-3">
                  <label className="scare-3-text">Hard Cap: <br/><span>1250BNB</span></label>
                  <label className="scare-3-text">Liquidity Locked: <br/><span>1,000,000,000,000</span></label>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-4"><S.Check2SquareIcon size={24}/> 4% Auto Liquidity Acquisition</div>
                <div className="col-md-4"><S.Check2SquareIcon size={24}/> 4% $BNB Redistribution</div>
                <div className="col-md-4"><S.Check2SquareIcon size={24}/> 1% $GOSTFACE Redistribution</div>
            </div>
          </S.Content>
        </div>
      </S.Section>

      <S.Section id="documents" className="documents">
        <S.Content className="col-sm-12 col-md-11 col-lg-10 col-xl-9 py-16 scroll fade-in-bottom">
          <div className="text-center">
            <h2 className="title">DOCUMENTS</h2>
          </div>
          <div className="row">
            <div className="col-sm-2 icon-box-f2"></div>
            <div className="col-sm-5 icon-box icon-box-d">
              <div className="icon-box-holder">
                <S.FileIcon size={64}/><h3 className="title_text">Whitepaper</h3>
                <a target="_blank" href="/files/whitepaper.pdf#toolbar=0" className="button_text">
                  Read<S.ArrowRightIcon size={16}/>
                </a>
              </div>
            </div>
            <div className="col-sm-5 icon-box icon-box-d">
              <div className="icon-box-holder">
                <S.FileBlankIcon size={64}/><h3 className="title_text">Audit</h3>
                <a target="_blank" href="/files/audit.pdf#toolbar=0" className="button_text">
                  Read<S.ArrowRightIcon size={16}/>
                </a>
              </div>
            </div>
          </div>
        </S.Content>
      </S.Section>

      <S.Section id="roadmap" className="loadmap">
        <div className="text-center scroll fade-in-bottom">
          <img src="/images/roadmap_1.png" alt="loadmap" className="w-full"/>
        </div>
      </S.Section>

      <S.Section id="questions" className="questions">
        <S.Content className="col-sm-12 col-md-11 col-lg-10 col-xl-9 py-16 scroll fade-in-bottom">
            <div id="faq" className="col-lg-12 col-xl-12 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
              <div className="text-center">
                <h2 className="title">FREQUENTLY ASKED QUESTIONS</h2>
              </div>
            </div>
            {
              faqs.map((faq, index) => <Faq key={index} index={index+1} question={faq.question} answer={faq.answer}/>)
            }
        </S.Content>
      </S.Section>



      <S.Section id="checkout" className="checkout">
        <S.Content className="col-sm-12 col-md-11 col-lg-10 col-xl-9 py-16 scroll fade-in-bottom">
            <div className="text-center">
              <h2 className="title">CHECK IT OUT</h2>
            </div>
            <div className="row">
              <div className="col-sm-3 icon-box">
                <div className="icon-box-holder box-telegram">
                  <S.TelegramIcon size={48}/><h3 className="title_text">Telegram</h3>
                  <a target="_blank" href="https://www.t.me/ghostfacecommunity" className="button_text">
                    Join<S.ArrowRightIcon size={16}/>
                  </a>
                </div>
              </div>
              <div className="col-sm-3 icon-box">
                <div className="icon-box-holder box-twitter">
                  <S.TwitterIcon size={48}/><h3 className="title_text">Twitter</h3>
                  <a target="_blank" href="https://twitter.com/GhostfaceBSC" className="button_text">
                    Join<S.ArrowRightIcon size={16}/>
                  </a>
                </div>
              </div>
              <div className="col-sm-3 icon-box">
                <div className="icon-box-holder box-email">
                  <S.EmailIcon size={48}/><h3 className="title_text">Email</h3>
                  <a target="_blank" href="mailto:support@ghostface.finance" className="button_text">
                    Email us<S.ArrowRightIcon size={16}/>
                  </a>
                </div>
              </div>
              <div className="col-sm-3 icon-box">
                <div className="icon-box-holder box-chart">
                  <S.ChartIcon size={48}/><h3 className="title_text">Chart</h3>
                  <a target="_blank"
                     href="https://charts.bogged.finance/?token=0x0952ddffde60786497c7ced1f49b4a14cf527f76"
                     className="button_text">
                    Chart<S.ArrowRightIcon size={16}/>
                  </a>
                </div>
              </div>
            </div>
        </S.Content>
      </S.Section>
    </S.Container>
  );
};

export default Home;
