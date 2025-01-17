import React, { useState, useEffect } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
 

const Prayer = () => {
    return (
        <div className="container-flued">
            <Helmet>
                <title>Prayer</title>
            </Helmet>
           <div>
                <div className="ffbox mb-5 card_align"> 
                    <div className="ffbox1">
                        <div> 
                            <h2 className="gfg mb-3 navanal_heading">புனித சந்தன மாதாவை நோக்கி ஜெபம்
                            </h2> 
                            <div className="row">
                                <div className="col-12">
                                <p className="navanal_2">இறையருள் நிறைந்த புனித சந்தன மாதாவே! கன்னி மரியாளின் எழில்மிகு ஒப்பற்ற தாயே ! சந்தன மாதா ஆலயத்தில் வீற்றிருந்து / உமது அன்பின் அருளால் / அண்டி வரும் மக்களுக்கு / இறைவனின் அருட்கொடைகளை வாரி வழங்கி  வருகின்றீர் ./  உமக்கே எங்கள் வணக்கமும் நன்றியும் உரித்தாகுக!
                                    தாயே இறைவனால் நீர் எவ்வளவோ நேசிக்கப்பட்டிருக்கிறீர். நீர் கேட்கும்  மன்றாட்டை / அவர் தர மறுப்பதில்லை என அறிந்திருக்கிற நாங்களும் / உமது திருவடி அருகில் நிற்கின்றோம் . இறைவனின் அருளை மிகுதியாக கொண்ட புனித சந்தன மாதாவே !நாங்கள் இறையருள் நிறைந்த இல்லத்தினராய் வாழ்ந்து / நீர் வளம் பெற்ற மரம் போல் / இவ்வுலக வாழ்விலே நற்கணி தந்து / எங்களுக்கு இறைவன் தந்த மக்கள் செல்வங்களை / நன்னெறியில்  நடத்த அருள் புரியும். / நாங்கள் அருளிலும் அறிவிலும்  / அன்பிலும் அமைதியிலும் வாழ்ந்து / வளம் பெற செய்தருளும்.  / உலக வாழ்க்கையிலே / குறுக்கிடும்  அனைத்து தீமையிலும் இருந்தும் / எங்களைப்  பாதுகாத்து வழிநடத்திட  இறைவனிடம் பரிந்து   பேசுவீராக தாயே ஆமென்!</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                <p className="navanal_2" style={{textAlign: 'center'}}>புனித சந்தனத்தாயே/ எங்களுக்காக வேண்டிக்கொள்ளும்.<br /> புனித சந்தனத்தாயே / எங்களுக்காக வேண்டிக்கொள்ளும்.<br /> அனைத்து புனிதர்களே, புனிதர்களே, எங்களுக்காக வேண்டிக் கொள்ளுங்கள் .</p>
                                </div>
                            </div>
                            </div>
                            <div> 
                            <h2 className="gfg mb-3 navanal_heading">புனித சந்தன மாதா நவநாள் ஜெபம்</h2> 
                            <div className="row">
                                <div className="col-12">
                                <p className="navanal_2">தந்தை மகன் தூய ஆவியின் பெயராலே, ஆமென். 
                                    மரியன்னைக்கு அன்னையாகிய புனித சந்தன மாதாவே , உமது பிள்ளைகளுக்காக மன்றாடும் ....(3)</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> குரு   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2"> இரக்கமிகு இறைவனின் அருள் வரமிக்கவளாய்!  சுரக்கும் அருள் ஊற்றாகும்  கன்னிமரியின் அன்னையராய் வேண்டுவோருக்கு வேண்டும் வரமருளும்  தாயாய்  அதோ! உதயகால சுடரொளிபோல்  ஒளி வீசி பவனி வரும் மரியன்னைக்கு தாயாகிய. புனித சந்தன மாதாவே . </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> எல்   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">உம்மை அண்டி வரும் எங்களுக்காக வேண்டிக்கொள்ளும் .</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> குரு   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">இறைவா! என் இறைவா ! ஆர்வமுடன் உம்மை நாடுகிறேன். நீரின்றி வறண்டு கிடக்கும் நிலம் , நீரை நோக்கி இருப்பது போல், என் உள்ளம் உம்மீது வேட்கை கொண்டுள்ளது. என் உடலும் உம்மை ஆசிக்கின்றது .</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> எல்   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">வல்லமை மிக்க இறைவன் மீது/ என் உள்ளம் பூரிக்கின்றது .</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> குரு   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">ஏனெனில்! தம் திருவுளப்படி  நடந்த / புனித சந்தன தாயின் வழியே / எனக்கு அருள் மழை பொழிந்தார். எனவே கரம் நீட்டிக்  குரலெழுப்பும்  மக்கள் அனைவருமே / அவளை பேறுடையாள்  எனப் போற்றுவர் .</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> எல்   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">ஏனெனில்! வல்லமையும் மாட்சிமையும் மிக்கவர்! அவர் வழியே என்னில் பெரும் காரியங்களை நிகழ்த்தினார். இறையருள் எவ்வளவோ மேலானது .</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> குரு   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">இறைவனின் இரக்கப் பெருக்கம்/  இவள் வழியே புனித வாழ்வு கொள்வோர்  மீது இருக்கின்றது .</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> எல்   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">இறைமகன் இயேசு தம் அருள் வரங்களை/ இத்தாயின் வழியே மன்றாடுவோர் மீது / ஏராளமாய் பொழிந்தருளினார்  .</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> குரு   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">வல்லமை படைத்தவர் /தாழ்ந்த உள்ளங்களை/ இத்தாயின் வழியே உயர்த்தியுள்ளார். </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> எல்   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">கண்ணீர் பெருக/ மனம் வருந்தும் எங்களின் துயர்களை/ புனித சந்தன தாயின் வழியே /துடைத்திட கருணைக்கூர்ந்தார்  .</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> குரு   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2"> இறைவா!  என் குரலைக் கேட்டருளும். என் மன்றாட்டுகளுக்குச் செவிசாய்த்தருளும் .</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> எல்   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">புனித சந்தன தாயின் வழியே / எங்கள் வேண்டுதலை கேட்டருளும். </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> குரு   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">தந்தைக்கும் மகனுக்கும்  தூய ஆவிக்கும் மகிமை உண்டாவதாக.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> எல்   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">தொடக்கத்தில் இருந்தது போல/ இப்பொழுதும் எப்பொழுதும்/ என்றென்றும் இருப்பதாக .ஆமென்.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> குரு   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">இரக்கமிகு இறைவனின் அருள் வரமிக்கவளாய்!  சுரக்கும் அருள் ஊற்றாகும்  கன்னிமரியின் அன்னையராய் வேண்டுவோருக்கு வேண்டும் வரமருளும்  தாயாய்,  அதோ! உதயகால சுடரொளிபோல்  ஒளி வீசி பவனி வரும் மரியன்னைக்கு தாயாகிய. புனித சந்தன மாதாவே .</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> எல்   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">உம்மை அண்டி வரும் எங்களுக்காக வேண்டிக்கொள்ளும் .</p>
                                </div>
                            </div>
                            </div>
                            <div> 
                            <h2 className="gfg mb-3 navanal_heading">புனித சந்தன தாயை நோக்கி மன்றாட்டுகள்</h2> 
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> குரு   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">இறையருள் நிறைந்திடும் புனித சந்தன தாயே!  உலக மீட்பரின்  அன்னை கன்னி மரியாளுக்கு தாயாக/  இறைவனால் நீர் தெரிந்து கொள்ளப்பட்டீரே! இறை இயேசுவிடம் வேண்டி/ எங்கள் ஆன்மா வாழ்வின் புனிதத்தை நாங்கள்  அறியவும் /நீர் அனுபவித்த இறையன்பை நாங்கள் உணர்ந்து/  என்றும் அருள் வாழ்வின் நிலைத்திடும் வரத்தை/ பெற்றுத் தர வேண்டும் என்று உம்மை  மன்றாடுகிறோம்    .</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> எல்   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">புனித சந்தன தாயாம்/ அன்னம்மாள் வழியாக/ ஆண்டவரே எங்கள் மன்றாட்டை கேட்டருளும். </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> குரு   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">இறையருள் நிறைந்திடும் புனித சந்தன தாயே!  எங்களது இல்லற வாழ்விலே இறைவழி  நடந்திட /நல்லதொரு   வழிகாட்டியாக இறைவனால் எமக்களிக்கப்பட்டீரே! நாங்கள் பாவ வாழ்விற்கு இறந்து/ நித்திய வாழ்வுக்கு உயிர் பெற்று எழும் வரத்தைப்      பெற்றுத்தர உம்மை  மன்றாடுகிறோம்.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> எல்   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">புனித சந்தன தாயாம்/ அன்னம்மாள் வழியாக/ ஆண்டவரே எங்கள் மன்றாட்டை கேட்டருளும்.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> குரு   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">இறையருள் நிறைந்திடும்  புனித சந்தன தாயே! அழிந்து போகும் உலக இன்பங்களுக்கு / எங்கள் உடலை பலி கொடுக்காது. எங்கள் உள்ளமும் உடலும்/ பரிசுத்த ஆவியின் ஆலயமாக இருக்கும் வண்ணம்/ உம்மை போல் நிறைவாழ்வு நடத்த அருள் புரிய/ உம்மை மன்றாடுகிறோம்</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> எல்   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">புனித சந்தன தாயாம்/ அன்னம்மாள் வழியாக/ ஆண்டவரே எங்கள் மன்றாட்டை கேட்டருளும்.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> குரு   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">இறையருள் நிறைந்திடும் புனித சந்தன தாயே!  உலக வாழ்விலே துன்பங்கள் சூழ்ந்திடும் போது/ அவைகளை பொறுமையோடு ஏற்று/ புனித வாழ்வுக்கு அடித்தளமாக்கி /உமது  நேரிய வழியை நாங்களும் பின்பற்றி வாழ வரமருள   உம்மை  மன்றாடுகிறோம் .</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> எல்   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">புனித சந்தன தாயாம்/ அன்னம்மாள் வழியாக/ ஆண்டவரே எங்கள் மன்றாட்டை கேட்டருளும்.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> குரு   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">இறையருள் நிறைந்திடும் புனித சந்தன தாயே!  இல்லற வாழ்வை புனிதப்படுத்த/ இறைவன் மாட்டில் தனித்த பக்தி பற்றுதலோடு நடக்க திருவுளம்  கொண்டீரே! நாங்களும் இல்லற வாழ்வின் மேன்மையையும், கடமையையும் உணர்ந்து/ இறையன்பில் நிறைவாழ்வு நடத்த /வரமருள   உம்மை மன்றாடுகிறோம் .</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> எல்   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">புனித சந்தன தாயாம்/ அன்னம்மாள் வழியாக/ ஆண்டவரே எங்கள் மன்றாட்டை கேட்டருளும்.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> குரு   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">இறையருள் நிறைந்திடும் புனித சந்தன தாயே! நீர் அன்றாட வாழ்விலே/ ஒவ்வொரு செயலிலும் இறை சித்தமென உணர்ந்து /இறைவனின் புகழுக்காக நடக்க அறிந்திருந்தீரே! நாங்களும் ,எங்கள் எண்ணம் ,சொல், செயல் அனைத்திலும்/ இறைசித்தம் எதுவென உணர்ந்து வாழ /அருள் புரிய உம்மை மன்றாடுகிறோம் .</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> எல்   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">புனித சந்தன தாயாம்/ அன்னம்மாள் வழியாக/ ஆண்டவரே எங்கள் மன்றாட்டை கேட்டருளும்.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> குரு   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">இறையருள் நிறைந்திடும் புனித சந்தன தாயே! இறைவன் எங்கள் நல்வாழ்வுக்கென தந்த கால்நடைகள், நிலபுலன்கள் ,மக்கள் செல்வங்கள், வாகனங்களை உமது  அருளாசீரால் நிரப்பி/ உம்மை அண்டி வரும்  அனைத்து மக்களையும் பாதுகாத்து வழிநடத்த/ உம்மை  மன்றாடுகிறோம்.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                <p className="navanal_1"> எல்   : </p>
                                </div>
                                <div className="col-9">
                                <p className="navanal_2">புனித சந்தன தாயாம்/ அன்னம்மாள் வழியாக/ ஆண்டவரே எங்கள் மன்றாட்டை கேட்டருளும்.</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>    
            </div>
        </div>
    );
};

export default Prayer;