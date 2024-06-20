import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "styled-components";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <StyledComponent>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Layout>
      </StyledComponent>
    </BrowserRouter>
  );
}

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default App;
