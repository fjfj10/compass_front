import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const Common = css`
    * {
        box-sizing: border-box;
        font-family: 'IBM Plex Sans KR', sans-serif !important;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgb(177, 194, 203);
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
        background: rgba(177, 194, 203, .1);
    }
`;

export const SButton = css`
    position: relative;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 5px 8px;
    display: inline-block;
    text-align: center;
    color: black;
    background-color: #eee;
    cursor: pointer;
    :active {
        top: 2px; 
        box-shadow: 0 0 #eee; 
        background-color: #aaa;
        color: white;
    }
`

export const STable = css`
    width: 100%;

    table {
        margin: auto;
        border-radius: 10px;
        border-collapse: collapse;
        overflow: hidden;
    }
    
    tr:first-of-type {
        border-top: none;
        background: #428bca;
        color: #fff;
    }

    tr {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        background-color: #f5f9fc;
    }

    tr:nth-of-type(odd):not(:first-of-type) {
        background-color: #ebf3f9;
    }

    tr:hover:not(:first-of-type) {
        background-color: #d8e7f3;
    }
    
    td, th {
        vertical-align: middle;
        text-align: center;
        height: 45px;
    }

    input {
        outline: none;
        border: none;
        background-color: transparent;
    }
`;