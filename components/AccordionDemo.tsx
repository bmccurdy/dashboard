import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AccordionDemo = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="p-4 py-2 focus:outline-none bg-accent hover:bg-accent/80">Is it accessible?</AccordionTrigger>
        <AccordionContent>
          <div className="overflow-x-auto pt-2">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {Array.from({ length: 8 }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    <th className="px-6 py-4 whitespace-nowrap text-left text-sm bg-gray-50 text-gray-900">
                      Row {rowIndex + 1} - Col 1
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Row {rowIndex + 1} - Col 2
                    </td>
                    <th className="px-6 py-4 whitespace-nowrap text-left text-sm bg-gray-50 text-gray-900">
                      Row {rowIndex + 1} - Col 3
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Row {rowIndex + 1} - Col 4
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="p-4 py-2 focus:outline-none bg-accent hover:bg-accent/80">Is it styled?</AccordionTrigger>
        <AccordionContent>
          <div className="overflow-x-auto pt-2">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {Array.from({ length: 8 }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    <th className="px-6 py-4 whitespace-nowrap text-left text-sm bg-gray-50 text-gray-900">
                      Row {rowIndex + 1} - Col 1
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Row {rowIndex + 1} - Col 2
                    </td>
                    <th className="px-6 py-4 whitespace-nowrap text-left text-sm bg-gray-50 text-gray-900">
                      Row {rowIndex + 1} - Col 3
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Row {rowIndex + 1} - Col 4
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="p-4 py-2 focus:outline-none bg-accent hover:bg-accent/80">Is it animated?</AccordionTrigger>
        <AccordionContent>
          <div className="overflow-x-auto pt-2">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {Array.from({ length: 8 }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    <th className="px-6 py-4 whitespace-nowrap text-left text-sm bg-gray-50 text-gray-900">
                      Row {rowIndex + 1} - Col 1
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Row {rowIndex + 1} - Col 2
                    </td>
                    <th className="px-6 py-4 whitespace-nowrap text-left text-sm bg-gray-50 text-gray-900">
                      Row {rowIndex + 1} - Col 3
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Row {rowIndex + 1} - Col 4
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
