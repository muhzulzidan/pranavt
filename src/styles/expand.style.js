import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto; 
`;


export const Main = styled(Container)``;

export const BoxToggle = styled.div`
  text-align: center;
`;

export const BoxExpand = styled.div`
  max-width: 300px;
  color: #fff;
  height: 300px;
  /* display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  background-color: #12b47d;
  border-radius: 4px;
  margin: 20px;
  flex: auto;  */
`;

export const BoxExpand1 = styled(BoxExpand)`
  background-color: transparent;
`;

export const Button = styled.a`
    color: white;
    background: #6A00E9;
    padding: 1em;
    margin-bottom: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  
  &:hover {
      transform: translateY(-2px);
      box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  }
`;

export const ExpandBoxes = styled.div`
  display: flex;
  justify-content: space-around;
`;