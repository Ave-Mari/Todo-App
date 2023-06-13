import styled from 'styled-components';

export const Wrapper = styled.section`

        display: flex;
        justify-content: center;
        padding-bottom: 13px;

        .form {
            display: flex;
            justify-content: space-between;
            width: 550px;
            align-items: center;
          }
          .add-task-input {
            width: 100%;  
            border: none;
            padding: 11px 13px;
            border-radius: 5px;
            background: rgb(205, 225, 243);
          }
          .add-task-input[placeholder] {
            font-size: 21px;
          }
          
          .input-block {
              width: 77%;
            display: flex;
            align-items: center;
          }
`