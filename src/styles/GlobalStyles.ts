/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/indent */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-family: 'Nunito Sans', sans-serif;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    html {
        box-sizing: border-box;
        background-color: ${({ theme }) => {
          return theme.color.background;
        }};
        transition: 0.5s background-color linear;
    }

    *, *::after, *::before {
        box-sizing:inherit;
    }

    body {
        color: ${({ theme }) => {
          return theme.color.text;
        }};
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    #search {
      position: 'absolute';
      top: '50%';
      left: '2.3rem';
      font-size: '1.5625rem';
      transform: 'translateY(-150%)';
    }
    /* width */
::-webkit-scrollbar {
  width: .3125rem;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 .3125rem black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.color.text};
  border-radius: 5rem;
}
`;
