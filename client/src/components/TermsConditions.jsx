import React from "react";
import LocalHotelTwoToneIcon from "@mui/icons-material/LocalHotelTwoTone";
import PolicyIcon from "@mui/icons-material/Policy";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import HealingIcon from "@mui/icons-material/Healing";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ForestIcon from "@mui/icons-material/Forest";
import MedicationIcon from "@mui/icons-material/Medication";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

const TermsConditions = () => {
  const termsAndConditions = [
    {
      id: 1,
      title: "Cancellation and Refund Policy",
      points: [
        "No refund for cancellations made 9 days or less before the trip.",
        "25% refund for cancellations made 10 to 14 days before the trip.",
        "50% refund for cancellations made 15 to 30 days before the trip.",
        "100% refund if the trek or trip is canceled by Alpha Adventures due to unforeseen circumstances.",
      ],
      icon: <PolicyIcon />,
    },
    {
      id: 2,
      title: "Trip Alteration or Cancellation by Alpha Adventures",
      points: [
        "Alpha Adventures reserves the right to modify, reschedule, or cancel a trip due to safety concerns, weather, or other unforeseen circumstances.",
        "In case of trip cancellation by Alpha Adventures, travellers will be offered a full refund or the option to reschedule.",
      ],
      icon: <HighlightOffIcon />,
    },
    {
      id: 3,
      title: "Traveller Responsibility",
      points: [
        "Travellers are responsible for ensuring they are in good physical health and fitness to undertake the trip.",
        "It is the responsibility of the traveller to inform Alpha Adventures of any medical conditions or allergies before the trip.",
        "All travellers must adhere to the instructions of the trek leader or guide for safety reasons.",
      ],
      icon: <HandshakeIcon />,
    },
    {
      id: 4,
      title: "Assumption of Risk",
      points: [
        "Travellers acknowledge the inherent risks involved in adventure activities like trekking, camping, and outdoor pursuits, including accidents, injury, or illness.",
        "By joining the trip, travellers agree to assume all risks associated with such activities.",
      ],
      icon: <AnnouncementIcon />,
    },
    {
      id: 5,
      title: "Insurance",
      points: [
        "Alpha Adventures advises all travellers to obtain personal travel and medical insurance that includes coverage for adventure sports and emergency evacuation.",
      ],
      icon: <ReceiptIcon />,
    },
    {
      id: 6,
      title: "Behavior and Conduct",
      points: [
        "Travellers must respect the local culture, environment, and fellow adventurers.",
        "Any disruptive or inappropriate behavior may result in the removal of the traveller from the trip without refund.",
      ],
      icon: <PsychologyAltIcon />,
    },
    {
      id: 7,
      title: "Liability Waiver",
      points: [
        "Alpha Adventures is not liable for any injury, loss, or damage to property during the trip unless caused by gross negligence or intentional misconduct by the company.",
      ],
      icon: <HealingIcon />,
    },
    {
      id: 8,
      title: "Force Majeure",
      points: [
        "Alpha Adventures is not responsible for cancellations or delays caused by events beyond its control, such as natural disasters, strikes, or government regulations.",
      ],
      icon: <DoDisturbAltIcon />,
    },
    {
      id: 9,
      title: "Travel Documents",
      points: [
        "Travellers must ensure they have valid identification, travel permits, and any other necessary documents required for the trip.",
      ],
      icon: <DocumentScannerIcon />,
    },
    {
      id: 10,
      title: "Photo/Video Usage",
      points: [
        "Alpha Adventures may take photos or videos during the trip for promotional purposes. Travellers agree to allow the use of these materials unless they request otherwise in advance.",
      ],
      icon: <PhotoCameraIcon />,
    },
    {
      id: 11,
      title: "Changes to Itinerary",
      points: [
        "Alpha Adventures reserves the right to alter the itinerary in the interest of traveller safety or operational efficiency.",
      ],
      icon: <SafetyCheckIcon />,
    },
    {
      id: 12,
      title: "Fitness and Health Requirements",
      points: [
        "Travellers are responsible for ensuring they are physically fit to participate in the activities included in the trip.",
        "Alpha Adventures reserves the right to disallow a traveller from participating if their fitness level is deemed unsuitable for the activities planned.",
        "Travellers are required to disclose any medical conditions that may affect their ability to participate safely.",
      ],
      icon: <FitnessCenterIcon />,
    },
    {
      id: 13,
      title: "Equipment and Gear",
      points: [
        "Alpha Adventures will provide a list of required equipment and gear for each trip.",
        "Travellers are responsible for bringing the required equipment unless otherwise stated.",
        "Alpha Adventures may provide rental options for certain gear. Any damage or loss of rented gear must be compensated by the traveller.",
      ],
      icon: <HomeRepairServiceIcon />,
    },
    {
      id: 14,
      title: "Environmental Responsibility",
      points: [
        "Alpha Adventures emphasizes eco-friendly practices during all trips.",
        "Travellers must adhere to Leave No Trace principles, ensuring that no waste or damage is left in natural areas.",
        "Littering or any harm to the environment may result in removal from the trip without refund.",
      ],
      icon: <ForestIcon />,
    },
    {
      id: 15,
      title: "Emergency Situations",
      points: [
        "In case of an emergency, travellers must follow the instructions of the trek leader and the emergency protocol.",
        "Any additional costs incurred during emergency situations, such as evacuation, medical treatment, or transportation, will be borne by the traveller unless covered by insurance.",
      ],
      icon: <MedicationIcon />,
    },
    {
      id: 16,
      title: "Itinerary Adjustments",
      points: [
        "The itinerary is subject to change based on weather conditions, road closures, or other unforeseen circumstances.",
        "In such cases, Alpha Adventures will make every effort to provide suitable alternatives, but no refunds will be issued for itinerary changes.",
      ],
      icon: <DisabledByDefaultIcon />,
    },
  ];

  return (
    <div className="bg-gray-50 py-12 font-sans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="">
          <div className="w-full">
            <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Terms And Conditions
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 w-full">
              {termsAndConditions.map((term) => (
                <div
                  key={term.id}
                  className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <dt className="flex items-center font-semibold text-gray-900 mb-3">
                    <div className="mr-3 text-indigo-600">{term.icon}</div>
                    {term.title}
                  </dt>
                  <dd className="space-y-2 text-gray-600">
                    {term.points.map((point, index) => (
                      <p key={index} className="pl-6">
                        {point}
                      </p>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
