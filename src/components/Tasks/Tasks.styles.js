import styled from 'styled-components';

export const Wrapper = styled.section`

        border: 2px dashed #2c448e;
        height: 293px;
        margin-bottom: 19px;

        overflow: hidden;
        overflow-y: hidden;
        overflow-y: scroll;

        ::-webkit-scrollbar {
          background: #fff;  
          width: 8px;    
        }
        ::-webkit-scrollbar-thumb {
          background: rgb(197, 127, 211);  
        }

        scrollbar-color: rgb(197, 127, 211) #fff;
        scrollbar-width: thin;

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;

                
        .no-task {
            margin: 0 auto;
          }
          
          .todo-list {
            list-style: none;
            padding-left: 0;
            width: 84%;
            cursor: grab;
            background: #f3f7ff;
            border: 4px dotted #2c448e;
            border-radius: 9px;
          }
          
          .todo-item {
            display: flex;
            justify-content: flex-end;
              
            align-items: center;
            padding-left: 15px;
            padding-right: 15px;
            border-radius: 9px;
          
          
            p {
              font-family: Arial, Helvetica, sans-serif;
              flex-grow: 2;
            }
          }
          
          .btn-add-task {
              background: #6591e4;
              border: 3px solid #2c448e;
              border-radius: 4px;
              font-size: 19px;
              font-family: 'Aleo', serif;
              color: #fff;
              padding: 4px 11px;
            cursor: pointer;
          
            &:hover {
              background: #4770bc;
            }
          }
          
          
          .task-checked {
            text-decoration: line-through;
          }
          .task-unchecked {
            text-decoration: none;
          }
          
          .todo-item-btn {
            width: 35px;
            height: 35px;
            border: none;
            background: none;
            border-radius: 5px;
            &:hover {
              background: rgb(250, 182, 193);
            }
            cursor: pointer;
          }
          
          .todo-checkbox-label {
            width: 35px;
            height: 35px;
          
            border-radius: 5px;
            &:hover {
              background: rgb(151, 218, 147);
            }
            
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            
          }
          
          .todo-checkbox {
            width: 15px;
            height: 15px;
          }
`;