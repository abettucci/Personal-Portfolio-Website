import Link from 'next/link';
import Image from 'next/image';

const MyProject = () => {
  return (
    <div>
      <h1>Mi Proyecto</h1>
      <Image
        src="/images/coin-custody-project.jpeg"
        alt="Descripción de la imagen"
        width={500} // Ajusta según sea necesario
        height={300} // Ajusta según sea necesario
      />
      <p>
        🚀 My first software freelance project with Coin Custody: a serverless price optimizer that scrapes competitors prices in MercadoLibre website using a stack of AWS services and the MercadoLibre API.

        🌐 About the Project

        The MercadoLibre platform enables sellers to sell a standard item sharing the same publication which is highly visible on the website. This publication provides an attribute which defines the winner user of the publication based on MercadoLibre rules. The objective of this project was to optimize the price of the publication in order to get that winning status in all the client catalog publications whenever possible.

        💡 Price Automation

        Before the optimizer there was an employee checking competitors publications prices and adjusting the price based on that manual scraping. With the optimizer the client removed that task and let the optimizer scrape competitors prices and adjust automatically on the criteria previously defined. The client is able to make manual updates, stop the optimizer if desired, and make adjustments of the optimizer parameters through a Google Spreadsheet. 

        📌 Tech Stack 

        Input parameters and logging: Google Sheets API.
        Scrapping: MercadoLibre API and Postman.
        Versioning: Github.
        Deployment: Github Actions, Docker and ECR.
        Code execution: Lambda Function with a cron-schedule based trigger on Eventbridge.
        Storage of optimizer outputs: S3.
        Visualization: Amazon OpenSearch.

        All the services were selected to create an easy serverless infrastructure for an ad-hoc solution under the premise of free-tier.

        🔄 Continuous Delivery

        Automated deployments and updates with a CD workflow with Github Actions, making the development process efficient and reliable.

        📚 Documentation

        Every step of the project is documented in my GitHub repository. Feel free to check out the workflow and learnings: 
        https://lnkd.in/dA2rV6mD.

        This project was not only challenging but it was also a chance to put all the skills I learned into action in a real world application.
      </p>
              
      <div className="flex gap-4">
        <Link href="/projects" className="button">
          Volver a Proyectos
        </Link>
        <Link href="/" className="button">
          Volver al Home
        </Link>
      </div>
    </div>
  );
};

export default MyProject;
