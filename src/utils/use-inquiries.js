import { useCallback, useState } from "react";
import { InquiryService } from "../services/api";

export const useInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchInquiries = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await InquiryService.getInquiries();
      setInquiries(response.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteInquiries = useCallback(async (ids) => {
    try {
      setLoading(true);
      setError(null);

      await InquiryService.deleteInquiries(ids);
      // Refetch or update local state
      setInquiries((prevInquiries) =>
        prevInquiries.filter((inquiry) => !ids.includes(inquiry.id))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  return { inquiries, loading, error, fetchInquiries, deleteInquiries };
};
