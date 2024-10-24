import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const triggerNames = [
  "Incident",
  "Patient Information",
  "Units",
  "Personnel",
  "Narrative",
  "Past Medical History",
  "Physical Exam",
  "Vital Signs",
  "Interventions",
  "Medications",
  "Personal Protective Equipment",
  "Billing Information",
  "Medical Device Events",
  "Signatures",
  "Meta Data",
];

export const AccordionDemo = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {triggerNames.map((name, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="p-4 py-2 focus:outline-none bg-accent hover:bg-accent/80">
            {name}
          </AccordionTrigger>
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
      ))}
    </Accordion>
  );
};
