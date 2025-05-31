/**
 * @Interface @Segregation
** 1. Create interfaces and classes for a document system:

** 2. Printable interface with print()

** 3. Scannable interface with scan()

** 4. Faxable interface with fax()

** 5. Implement these in AllInOnePrinter and SimplePrinter classes appropriately

*/

interface Printable {
  print(document: string): void;
}

interface Scannable {
  scan(document: string): void;
}

interface Faxable {
  fax(message: string): void;
}

class AllInOnePrinter implements Printable, Scannable, Faxable {
  print(document: string): void {
    console.log(`Printing: ${document}`);
  }

  scan(document: string): void {
    console.log(`Scanning: ${document}`);
  }

  fax(message: string): void {
    console.log(`Faxing: ${message}`);
  }
}

class SimplePrinter implements Printable {
  print(document: string): void {
    console.log(`Simple Printing: ${document}`);
  }
}

const allOnePrinter = new AllInOnePrinter();
allOnePrinter.fax("Sending Fax document");

allOnePrinter.print("Report.pdf");
allOnePrinter.scan("Report.pdf");
allOnePrinter.fax("Report.pdf");

const simplePrinter = new SimplePrinter();
simplePrinter.print("Invoice.pdf");
// simplePrinter.scan("Invoice.pdf"); ❌ Error - Property 'scan' does not exist on type 'SimplePrinter'.
