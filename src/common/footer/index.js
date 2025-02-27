import React, { PureComponent } from 'react';
import {
    FooterWrapper,
    FooterContent,
    Nav,
    NavUl,
    Li,
    LangSpan,
    LangSelect,
    CompSpan
} from './style';

class Footer extends PureComponent {
    render() {
        return (
            <FooterWrapper role="contentinfo">
                <FooterContent style={{maxWidth: 1012}}>
                    <Nav>
                        <NavUl>
                            <Li><a href="/about/us/">关于我们</a></Li>
                            <Li><a href="https://help.instagram.com/">支持</a></Li>
                            <Li><a href="https://instagram-press.com/">新闻中心</a></Li>
                            <Li><a href="/developer/">API</a></Li>
                            <Li><a href="/about/jobs/">工作</a></Li>
                            <Li><a href="/legal/privacy/">隐私</a></Li>
                            <Li><a href="/legal/terms/">条款</a></Li>
                            <Li><a href="/explore/locations/">目录</a></Li>
                            <Li><a href="/directory/profiles/">个人主页</a></Li>
                            <Li><a href="/directory/hashtags/">话题标签</a></Li>
                            <Li>
                                <LangSpan>语言
                                    <LangSelect aria-label="切换显示语言">
                                        <option value="af">Afrikaans</option>
                                        <option value="cs">Čeština</option>
                                        <option value="da">Dansk</option>
                                        <option value="de">Deutsch</option>
                                        <option value="el">Ελληνικά</option>
                                        <option value="en">English</option>
                                        <option value="es">Español (España)</option>
                                        <option value="es-la">Español</option>
                                        <option value="fi">Suomi</option>
                                        <option value="fr">Français</option>
                                        <option value="id">Bahasa Indonesia</option>
                                        <option value="it">Italiano</option>
                                        <option value="ja">日本語</option>
                                        <option value="ko">한국어</option>
                                        <option value="ms">Bahasa Melayu</option>
                                        <option value="nb">Norsk</option>
                                        <option value="nl">Nederlands</option>
                                        <option value="pl">Polski</option>
                                        <option value="pt-br">Português (Brasil)</option>
                                        <option value="pt">Português (Portugal)</option>
                                        <option value="ru">Русский</option>
                                        <option value="sv">Svenska</option>
                                        <option value="th">ภาษาไทย</option>
                                        <option value="tl">Filipino</option>
                                        <option value="tr">Türkçe</option>
                                        <option value="zh-cn">中文(简体)</option>
                                        <option value="zh-tw">中文(台灣)</option>
                                        <option value="bn">বাংলা</option>
                                        <option value="gu">ગુજરાતી</option>
                                        <option value="hi">हिन्दी</option>
                                        <option value="hr">Hrvatski</option>
                                        <option value="hu">Magyar</option>
                                        <option value="kn">ಕನ್ನಡ</option>
                                        <option value="ml">മലയാളം</option>
                                        <option value="mr">मराठी</option>
                                        <option value="ne">नेपाली</option>
                                        <option value="pa">ਪੰਜਾਬੀ</option>
                                        <option value="si">සිංහල</option>
                                        <option value="sk">Slovenčina</option>
                                        <option value="ta">தமிழ்</option>
                                        <option value="te">తెలుగు</option>
                                        <option value="vi">Tiếng Việt</option>
                                        <option value="zh-hk">中文(香港)</option>
                                        <option value="bg">Български</option>
                                        <option value="fr-ca">Français (Canada)</option>
                                        <option value="ro">Română</option>
                                        <option value="sr">Српски</option>
                                        <option value="uk">Українська</option>
                                    </LangSelect>
                                </LangSpan>
                            </Li>
                        </NavUl>
                    </Nav>
                    <CompSpan>© 2019 Instagram</CompSpan>
                </FooterContent>
            </FooterWrapper>
        )
    };
};

export default Footer;