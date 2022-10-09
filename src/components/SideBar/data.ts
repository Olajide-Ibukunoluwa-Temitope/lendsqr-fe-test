import home from "../../assets/icons/home.svg";
import users from "../../assets/icons/users.svg";
import guarantors from "../../assets/icons/guarantors.svg";
import loans from "../../assets/icons/loans.svg";
import decision_models from "../../assets/icons/decision_models.svg";
import savings from "../../assets/icons/savings.svg";
import loan_requests from "../../assets/icons/loan_requests.svg";
import white_list from "../../assets/icons/white_list.svg";
import karma from "../../assets/icons/karma.svg";
import organization from "../../assets/icons/organization.svg";
import savings_product from "../../assets/icons/savings_product.svg";
import fees_and_charges from "../../assets/icons/fees_and_charges.svg";
import transactions from "../../assets/icons/transactions.svg";
import services from "../../assets/icons/services.svg";
import service_account from "../../assets/icons/service_account.svg";
import settlements from "../../assets/icons/settlements.svg";
import reports from "../../assets/icons/reports.svg";
import preferences from "../../assets/icons/preference.svg";
import fees_and_pricing from "../../assets/icons/fees_and_pricing.svg";
import audit_logs from "../../assets/icons/audit_logs.svg";
import systems_messages from "../../assets/icons/systems_messages.svg";

import { sidebarData as sidebarDataType } from "./types";

export const sidebarData: sidebarDataType[] = [
  {
    title: "Dashboard",
    icon: home,
    link: "#",
  },
  {
    title: "Customers",
    children: [
      {
        title: "Users",
        icon: users,
        link: "#",
      },
      {
        title: "Guarantors",
        icon: guarantors,
        link: "#",
      },
      {
        title: "Loans",
        icon: loans,
        link: "#",
      },
      {
        title: "Decision Models",
        icon: decision_models,
        link: "#",
      },
      {
        title: "Savings",
        icon: savings,
        link: "#",
      },
      {
        title: "Loan Requests",
        icon: loan_requests,
        link: "#",
      },
      {
        title: "Whitelist",
        icon: white_list,
        link: "#",
      },
      {
        title: "Karma",
        icon: karma,
        link: "#",
      },
    ],
  },
  {
    title: "Businesses",
    children: [
      {
        title: "Organization",
        icon: organization,
        link: "#",
      },
      {
        title: "Loan Products",
        icon: loans,
        link: "#",
      },
      {
        title: "Savings Products",
        icon: savings_product,
        link: "#",
      },
      {
        title: "Fees and Charges",
        icon: fees_and_charges,
        link: "#",
      },
      {
        title: "Transactions",
        icon: transactions,
        link: "#",
      },
      {
        title: "Services",
        icon: services,
        link: "#",
      },
      {
        title: "Service Account",
        icon: service_account,
        link: "#",
      },
      {
        title: "Settlements",
        icon: settlements,
        link: "#",
      },
      {
        title: "Reports",
        icon: reports,
        link: "#",
      },
    ],
  },
  {
    title: "Settings",
    children: [
      {
        title: "Preferences",
        icon: preferences,
        link: "#",
      },
      {
        title: "Fees and Pricing",
        icon: fees_and_pricing,
        link: "#",
      },
      {
        title: "Audit Logs",
        icon: audit_logs,
        link: "#",
      },
      {
        title: "Systems Messages",
        icon: systems_messages,
        link: "#",
      },
    ],
  },
];
