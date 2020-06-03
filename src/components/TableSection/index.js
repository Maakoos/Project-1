import React from "react";
import styled from "styled-components";
import Heading from "components/Heading";
import Button from "components/Button";

const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
`;

const Table = styled.table`
  /* border: 1px solid #000; */
  border-collapse: collapse;
  width: 100%;
  /* min-width: 800px; */
`;

const Thead = styled.thead``;

const Tr = styled.tr``;

const Th = styled.th`
  display: table-cell;
  padding: 30px 20px;
  border: 1px solid #e1e1e1;
`;

const Td = styled.td`
  text-align: center;
  border: 1px solid #e1e1e1;
`;

const PlanTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  /* text-transform: uppercase; */
`;

const Price = styled.span`
  display: block;
  margin: 15px 0 0;
  color: ${({ theme }) => theme.primaryColor};
  font-size: 40px;
  font-weight: 700;
`;

const Time = styled.span`
  display: block;
  margin-bottom: 25px;
  font-size: 17px;
  font-weight: 700;
  color: #444444;
`;

const FeatureName = styled.h4`
  font-size: 16px;
  font-weight: 700;
`;

const FeatureInfo = styled.span`
  color: #111111;
  font-size: 14px;
  font-weight: 500;
`;

const Icon = styled.span`
  color: ${({ theme, red }) => (red ? "red" : theme.primaryColor)};
`;

const TableSection = () => (
  <div>
    <Heading>Web hosting plan perfect for you</Heading>
    <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th>
              <Icon>All shared hosting features</Icon>
              <PlanTitle>Choose perfect plan</PlanTitle>
            </Th>
            <Th>
              <PlanTitle>Started</PlanTitle>
              <Price>$3.90</Price>
              <Time>month</Time>
              <Button light>Buy now</Button>
            </Th>
            <Th>
              <PlanTitle>Business</PlanTitle>
              <Price>$5.90</Price>
              <Time>month</Time>
              <Button light>Buy now</Button>
            </Th>
            <Th>
              <PlanTitle>Premium</PlanTitle>
              <Price>$8.90</Price>
              <Time>month</Time>
              <Button light>Buy now</Button>
            </Th>
          </Tr>
        </Thead>

        <tbody>
          <Tr>
            <Th>
              <FeatureName>Number of Websites</FeatureName>
            </Th>
            <Td>
              <FeatureInfo>1 Website</FeatureInfo>
            </Td>
            <Td>
              <FeatureInfo>Multiple Websites</FeatureInfo>
            </Td>
            <Td>
              <FeatureInfo>Multiple Websites</FeatureInfo>
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>Free Domain Registration</FeatureName>
            </Th>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>Web Space</FeatureName>
            </Th>
            <Td>
              <FeatureInfo>5,000MB</FeatureInfo>
            </Td>
            <Td>
              <FeatureInfo>Unlimited</FeatureInfo>
            </Td>
            <Td>
              <FeatureInfo>Unlimited</FeatureInfo>
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>Email Accounts</FeatureName>
            </Th>
            <Td>
              <FeatureInfo>25</FeatureInfo>
            </Td>
            <Td>
              <FeatureInfo>Unlimited</FeatureInfo>
            </Td>
            <Td>
              <FeatureInfo>Unlimited</FeatureInfo>
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>MySQL Databases</FeatureName>
            </Th>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>Free App Store</FeatureName>
            </Th>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>cPanel Conotrl Panel</FeatureName>
            </Th>
            <Td>
              <Icon className="far fa-times-circle" red />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>Free Daily Backups</FeatureName>
            </Th>
            <Td>
              <Icon className="far fa-times-circle" red />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>Search Engine Optimization</FeatureName>
            </Th>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>99.9% Uptime Guarantee</FeatureName>
            </Th>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>Bandwith</FeatureName>
            </Th>
            <Td>
              <FeatureInfo>20GB</FeatureInfo>
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>Free Setup</FeatureName>
            </Th>
            <Td>
              <FeatureInfo>$ 1.99</FeatureInfo>
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>Advanced Security Features</FeatureName>
            </Th>
            <Td>
              <FeatureInfo>Extra</FeatureInfo>
            </Td>
            <Td>
              <FeatureInfo>Extra</FeatureInfo>
            </Td>
            <Td>
              <FeatureInfo>Extra</FeatureInfo>
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>Colud Hosting</FeatureName>
            </Th>
            <Td>
              <Icon className="far fa-times-circle" red />
            </Td>
            <Td>
              <FeatureInfo>$ 250.0</FeatureInfo>
            </Td>
            <Td>
              <FeatureInfo>$ 250.0</FeatureInfo>
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>24/7/365 Support</FeatureName>
            </Th>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>Website Bluilder</FeatureName>
            </Th>
            <Td>
              <FeatureInfo>1</FeatureInfo>
            </Td>
            <Td>
              <FeatureInfo>50</FeatureInfo>
            </Td>
            <Td>
              <FeatureInfo>Unlimited</FeatureInfo>
            </Td>
          </Tr>

          <Tr>
            <Th>
              <FeatureName>30 Day Money Back Guarantee</FeatureName>
            </Th>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
            <Td>
              <Icon className="far fa-check-circle" />
            </Td>
          </Tr>
        </tbody>
      </Table>
    </TableWrapper>
  </div>
);

export default TableSection;
