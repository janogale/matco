import React from "react";

import Container from "../../../components/ui/Container";
import GetQuoteForm from "../../../components/getqoutform/GetQoutForm";
import Heading from "../../../components/ui/Heading";

const GetQuotePage = () => {
  return (
      <Container>
      <Heading className="text-2xl mt-2">
        Get a Quote
      </Heading>
      <div className="shadow rounded-md p-5 mt-5 bg-gray-50">
      <GetQuoteForm />
      </div>
    </Container>
  );
};

export default GetQuotePage;
